import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import circle from '../../public/images/circulos2.jpg'
import circle2 from "../../public/images/circle.png";
import ParticleBg from "../components/ParticleBg";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Portafolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://brathkennet.github.io/career-portfolio/icons/favicon.ico"
        />
      </Head>

      <header className="flex items-center justify-around h-screen bg-no-repeat bg-center bg-cover bg-[url('../../public/images/bg-section1.jpeg')] z-50  ">
        <div
          className="bg-[black]/25 z-10 backdrop-blur-md border-4 border-[#C00B62] rounded-tr-[52px] rounded-bl-[52px] md:p-16 p-7 m-12"
          data-aos="zoom-in"
        >
          <p
            className={`text-white text-center md:text-5xl text-3xl lg:mb-8 mb-6 ${styles.section_title} `}
          >
            Desarrollo de Aplicaciones Web
          </p>
          <p
            className={`text-white text-center lg:text-2xl text-sm ${styles.section_subtitle}`}
          >
            Portafolio Electrónico
          </p>
        </div>
      </header>

      <section className=" flex items-center justify-around h-screen bg-[#13000E] z-20 relative">
        <div className="absolute top-0 h-[200px]">
          <ParticleBg />
        </div>
        <div
          className=" bg-[black]  border-4 border-[#C00B62] rounded-tr-[52px] rounded-bl-[52px]   md:p-16 p-7 m-12 z-10 "
          data-aos="fade-right"
        >
          <p
            className={`text-white text-center md:text-5xl text-3xl lg:mb-8 mb-6 ${styles.section_title}`}
          >
            Desarrollo de Aplicaciones Web
          </p>
          <p
            className={`text-white text-center lg:text-2xl text-sm ${styles.section_subtitle}`}
          >
            Portafolio Electrónico
          </p>
          <div className=" py-10">
            <Image
              src={circle2}
              width={"auto"}
              height={"auto"}
              alt="circle"
              className="m-auto animate-[spin_2s_linear_infinite] mt-16 w-40 h-40"
            />
          </div>
        </div>
      </section>
    </>
  );
}
