import { data } from "@/auxillary/data";
import ProductItem from "@/components/ProductItem";

export default function Home() {
  const { products } = data;
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductItem product={product} key={product.slug} />
      ))}
    </div>
  );
}
