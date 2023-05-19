import React from 'react'
import fonts from "../styles/Fonts.module.css";
import Link from 'next/link';
import Image from 'next/image';
import android from '../../public/icons/android.svg'
import facebook from "../../public/icons/facebook.svg";
import github from "../../public/icons/github.svg";
import twitter from "../../public/icons/twitter.svg";
import { links } from '../components/data';

const Footer = () => {

  const consolidatedLinks = links[0].sublinks.filter((link) =>
    link.Head.includes("Consolidado")
  );

  const renderLinks = (sublinks) => {
    return sublinks.map((sublink) => (
      <li className="pb-2" key={sublink.name}>
        <Link href={sublink.link}>{sublink.name}</Link>
      </li>
    ));
  };

  const renderLinkGroups = () => {
    const groups = [];
    let currentGroup = [];

    consolidatedLinks.forEach((link) => {
      link.sublink.forEach((sublink) => {
        currentGroup.push(sublink);

        if (currentGroup.length === 4) {
          groups.push(currentGroup);
          currentGroup = [];
        }
      });
    });

    if (currentGroup.length > 0) groups.push(currentGroup);

    return groups.map((group, index) => (
      <ul key={index} className="md:md-0 mb-8">
        {renderLinks(group)}
      </ul>
    ));
  };


  return (
    <footer
      className={`w-full bg-[#240016] border-y-2 border-y-[#C00B62] pt-16 pb-20 px-16 ${fonts.font_lilita}`}
    >
      <div className="grid c_lg:grid-cols-2 grid-cols-1 max-w-[85%] m-auto h-auto">
        <div
          className="h-full grid grid-cols-1 content-center"
          data-aos="zoom-in-right"
        >
          <ul className="text-[#C00B62] text-xl my-auto c_lg:mx-[10%] c_lg:mb-0 pb-3">
            <li className="pb-3">
              <Link href="/#intro" scroll={false}>
                Introducción
              </Link>
            </li>
            <li className="pb-3">
              <Link href="/#content" scroll={false}>
                Contenido
              </Link>
            </li>
            <li>
              <Link href="/#about" scroll={false}>
                Información Personal
              </Link>
            </li>
            <li className="c_lg:hidden block pt-3">Tabla de Contenido</li>
          </ul>
        </div>
        <div data-aos="zoom-in-left">
          <div className="text-[#C00B62] text-xl c_lg:block hidden">
            Tabla de Contenido
          </div>
          <div className="grid md:grid-cols-4 grid-cols-2 text-white text-base p-4">
            {renderLinkGroups()}
          </div>
        </div>
      </div>
      <div className="w-[90%] h-[1px] bg-[#C00B62] mx-auto mb-8"></div>
      <div className="flex justify-center gap-10 mb-8" data-aos="zoom-in-up">
        <Link href={""}>
          <Image src={facebook} width={30} height={30} alt="android" />
        </Link>
        <Link href={""}>
          <Image src={twitter} width={30} height={30} alt="android" />
        </Link>
        <Link href={""}>
          <Image src={github} width={30} height={30} alt="android" />
        </Link>
        <Link href={""}>
          <Image src={android} width={30} height={30} alt="android" />
        </Link>
      </div>
      <div className="text-white text-center" data-aos="zoom-in-up">
        <p className="">Copyright © 2023</p>
        <p className="mb-2">
          Diseñado por <span className="text-[#C00B62]">Louder</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer