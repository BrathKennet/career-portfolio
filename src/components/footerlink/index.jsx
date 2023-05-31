import React from 'react'
import Link from 'next/link';
import styles from '../../styles/Layouts.module.css'

const coloresafter = {
  white: "after:bg-white",
  styled: "after:bg-[#C00B62]",
};

const FooterLink = ({link, name, color}) => {
  return (
    <Link
      href={link}
      className={`${styles.footer_line} relative w-fit after:content-[''] after:absolute after:w-full after:h-1 after:-bottom-2 after:-left-0 ${coloresafter[color]} `}
      scroll={false}
    >
      {name}
    </Link>
  );
}

export default FooterLink