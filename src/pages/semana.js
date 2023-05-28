import fonts from "../styles/Fonts.module.css";
import { data } from "../data/data.js";
import Image from "next/image";
import { useRouter } from "next/router";
import bg_test from "../../public/images/bg-section1.jpeg";
import Title from "../components/title";

export default function Semana() {

  const id = useRouter().query.id;
  let dataGet = data[id - 1];

  return (
    <>
      <article
        className="min-h-screen bg-[#13000E] z-20 pt-36 pb-10 sm:px-28 px-8 max-w-screen text-white"
        id="inits"
      >
        {dataGet && (
          <div className="mx-auto p-4 sm:px-6 mt-5 h-full">
            <section className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-28 items-center">
              <div className="relative block group" data-aos="zoom-in-right">
                <div
                  className="absolute inset-0 bg-[#C00B62] hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
                  aria-hidden="true"
                ></div>
                <figure className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                  <Image
                    className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                    src={dataGet.img_principal}
                    width="540"
                    height="303"
                    alt="imagen seccion"
                  />
                </figure>
              </div>
              <div data-aos="zoom-in-left">
                <header>
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      {dataGet.labels.map((label) => (
                        <li className="m-1" key={label.name}>
                          <p
                            className={`inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-${label.color}-500 hover:bg-${label.color}-600 transition duration-150 ease-in-out`}
                          >
                            {label.name}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-2 mt-8">
                    <a
                      className="hover:text-gray-100 transition duration-150 ease-in-out"
                      href="#0"
                    >
                      {dataGet.theme}
                    </a>
                  </h3>
                </header>
                <p className="text-lg text-gray-400 flex-grow">
                  {dataGet.description}
                </p>
                <footer className="flex items-center mt-4 w-fit text-gray-500 hover:text-gray-100 transition duration-150 ease-in-out">
                  <div>
                    <span className="font-medium">Semana {dataGet.number}</span>
                  </div>
                </footer>
              </div>
            </section>
            <section
              className="text-white md:mt-24 mt-10 md:mx-8 text-justify"
              data-aos="fade-up"
            >
              {dataGet.content}
            </section>
            <section className="text-white mt-16 md:mx-8">
              <Title text={"Definiciones"} right={true} />
              <div className="flex flex-col gap-4 h-auto mt-16 items-center justify-center">
                {dataGet.definition.map((word) => (
                  <div
                    key={word.name}
                    className="w-full flex justify-center my-1"
                    data-aos="fade-up"
                  >
                    <div className=" w-[90%] grid grid-cols-12 border border-[#C00B62] rounded-lg p-3 gap-2 items-center  transition delay-150 duration-300 ease-in-out hover:scale-105 transform">
                      <div className="col-span-12 md:col-span-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="#C00B62"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                          />
                        </svg>
                      </div>

                      <div className="col-span-11 xl:-ml-5">
                        <p className="text-[#C00B62] font-semibold">
                          {word.name}
                        </p>
                      </div>
                      <div className="md:col-start-2 col-span-11 xl:-ml-5">
                        <p className="text-sm text-white ">{word.notion}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </article>
    </>
  );
}

/* export async function getStaticProps(context) {
  const { id } = context.query;
  let dataGet = data[id - 1];
  if (dataGet === undefined) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  } else {
    return {
      props: {
        dataGet,
      },
    };
  }
} */
