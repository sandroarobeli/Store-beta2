import SharedMeta from "@/components/SharedMeta";
import { data } from "@/auxillary/data";

export default function Head({ params }) {
  const { slug } = params;
  const { products } = data;

  const product = products.find((product) => product.slug === slug);
  return (
    <>
      <title>
        {product ? `Internet Store - ${product.name}` : "Product Not Found"}
      </title>
      <SharedMeta />
    </>
  );
}
