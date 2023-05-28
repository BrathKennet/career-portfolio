import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import dataJson from '../data/data.json'

export default function Semana() {
  const id = useRouter().query.id;

  const [data, setData] = useState([]);
  /* const [data2, setData2] = useState([])

  setData2(dataJson.semanas) */
  const data2 = dataJson.semanas

  const fetchData = async () => {
    try {
      const response = await fetch("./api/data");
      const jsonData = await response.json();
      /* console.log(dataJson.semanas); */
      setData(jsonData.semanas);
      /* console.log(dataJson) */
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
        <br />
        <hr />
        <br />
        {data2[id - 1] && (
          <>
            <div>{data2[id - 1].id}</div>
            <p>{data2[id - 1].titulo}</p>
            <p>{data2[id - 1].contenido}</p>
          </>
        )}
      </section>
    </>
  );
}
