import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Semana() {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/data");
      const jsonData = await response.json();
      setData(jsonData.semanas);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section className="p-52 bg-slate-500">
        <div>{id}</div>
        {Array.isArray(data) && data.length > 0 && (
          <>
            <div>{data[id - 1].id}</div>
            <p>{data[id - 1].titulo}</p>
            <p>{data[id - 1].contenido}</p>
          </>
        )}
      </section>
    </>
  );
}