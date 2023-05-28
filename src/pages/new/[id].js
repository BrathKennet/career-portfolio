import { useRouter } from "next/router";
import dataJson from "../../data/data.json";

export default function New() {
  const id = useRouter().query.id;
  const data2 = dataJson.semanas;

  return (
    <>
      <section className="p-52 bg-slate-500">
        <div>{id}</div>
        {data2[id - 1] ? (
          <>
            <div>{data2[id - 1].id}</div>
            <p>{data2[id - 1].titulo}</p>
            <p>{data2[id - 1].contenido}</p>
          </>
        ) : (
          <p>no hay</p>
        )}
      </section>
    </>
  );
}
