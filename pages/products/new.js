import Layout from "@/components/Layout";

export default function NewProduct() {
  return (
    <Layout>
      <h1>New Product</h1>
      <input type="text" placeholder="product name" />
      <textarea type="text" placeholder="description" />
      <input type="text" placeholder="price" />
    </Layout>
  );
}
