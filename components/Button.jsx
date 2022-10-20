import Link from "next/link"

const Button = () => ({ styles, text, link }) => {
  return(
    <a href={`/${link}`}>
      <button type="button" className={`py-4 px-6 bg-blue-gradient font-popins font-medium xs:text-[16px] xl:text-[18px] text-primary outline-none rounded-lg ${styles}`}>
        {text}
      </button>
    </a>
  );
};

export default Button;
