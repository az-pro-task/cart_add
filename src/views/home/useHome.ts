import { useEffect, useState } from "react";
import { getDataSource } from "../../api/getDataSource";
import { IProduct } from "../../types/IProduct";

export default function useHome() {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [err, setErr] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getDataSource()
      .then(setProduct)
      .catch(setErr)
      .finally(() => setLoading(false));
  }, []);

  return { product, err, loading };
}
