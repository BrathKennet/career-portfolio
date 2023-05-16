import styles from '../../styles/Components.module.css'

const Title = ({text, right}) => {

  return (
    <h2
      className={`relative w-fit h-fit border-2 border-[#C00B62] md:px-5 md:py-2 px-2 py-1 min-w-[300px] text-[#C00B62] md:text-[30px] text-[23px] text-center md:${
        right ? "ml-0" : "mr-0"
      } m-auto after:content-[' '] after:absolute after:w-[50px] after:h-[30px] after:bottom-[-10px] after:right-[-10px] after:border-r-4 after:border-r-[#C00B62] after:border-b-4 after:border-b-[#C00B62] before:content-[' '] before:absolute before:w-[50px] before:h-[30px] before:top-[-10px] before:left-[-10px] before:border-l-4 before:border-l-[#C00B62] before:border-t-4 before:border-t-[#C00B62]   ${
        styles.title
      }`}
      data-aos={`zoom-in-${right ? "right" : "left"}`}
    >
      {text}
    </h2>
  );
}

export default Title;