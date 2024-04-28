import { useState, useEffect } from "react";

export const useAPI = <D extends {}>(
  endpoint: string
): {
  data: D | null;
  error: Error | null;
  loading: boolean;
} => {
  const [data, setData] = useState<D | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoint);
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        const e = new Error("API Error", { cause: error });
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, error, loading };
};
