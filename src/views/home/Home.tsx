import MiniCart from "../../components/cart/MiniCart";
import Layout from "../../components/layout/Layout";
import Product from "../../components/product/Product";
import useHome from "./useHome";

export default function Home() {
  const { loading, product, err } = useHome();
  return (
    <Layout renderNav={() => <MiniCart />}>
      {loading && "loading..."}
      {product && <Product dataSource={product} />}
      {err && err.message}
    </Layout>
  );
}
