import Layout from "@/components/Layout";
import ProductForm from "@/components/ProductForm";
import ProductFrom from "@/components/ProductForm";
import axios from "axios";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

export default function EditProductPage() {
  const [productInfo, setProductInfo] = useState(null);
  const router = useRouter();
  const {id} = router.query;

  console.log("product inof", productInfo);

  useEffect(() => {
    if (!id) return;
    axios.get("/api/products?id=" + id).then((res) => {
      setProductInfo(res.data);
    });
  }, [id]);
  return (
    <Layout>
      <ProductForm {...productInfo} />
    </Layout>
  );
}