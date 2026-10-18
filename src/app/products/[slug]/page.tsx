import ProductDetailsPage from "@/src/features/products/pages/ProductDetailsPage";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  return (
   <ProductDetailsPage params={params}/>
  );
}
