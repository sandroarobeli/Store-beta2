"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { StoreContext } from "./StoreProvider";
import DialogModal from "./DialogModal";

// !!! There must be ONLY ONE ToastContainer!!!

export default function AddToCartButton({ product }) {
  const { state, dispatch } = useContext(StoreContext);
  const router = useRouter();
  const pathname = usePathname();
  const [modalOpen, setModalOpen] = useState(false);

  const addToCartHandler = async () => {
    const existingItem = state.cart.cartItems.find(
      (item) => item.slug === product.slug
    );
    // If item is already in the cart, we increment, otherwise we add 1
    const quantity = existingItem ? existingItem.quantity + 1 : 1;

    // The product below is named differently, because product from state may not reflecting
    // What other online customers could have bought just after I started shopping
    // const currentProduct = await fetch(
    //   `http://localhost:3000/api/products/${product._id}`,
    //   {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }  // THIS BLOCK WILL KICK IN WHEN I RE WATCH CURRENT VIDEO I STOPPED AT
    // );

    // Quantity chosen cannot exceed available stock
    if (product.inStock < quantity) {
      setModalOpen(true);
      return;
    }

    dispatch({
      type: "CART_ADD_ITEM",
      payload: { ...product, quantity: quantity },
    });

    // Deploy a mini modal to show user a product has been added
    toast.success(`${product.name} has been added!`);

    // Redirect user to cart page only if added via [slug].js, otherwise keep'em at home page
    if (pathname !== "/") {
      router.push("/cart");
    }
  };

  return (
    <>
      <button className="primary-button w-full" onClick={addToCartHandler}>
        Add to Cart
      </button>
      <DialogModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Out of Stock!"
        description="Order exceeded currently available quantity"
        className="inline-flex justify-center border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-gray-900 primary-button"
      />
      <ToastContainer
        className="toast-message"
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
