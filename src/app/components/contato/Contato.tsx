import Image from "next/image";
import logo from "@/app/favicon.ico";

export default function Contato() {
  return (
    <footer
      className={`
        flex flex-col flex-wrap mt-5 w-full px-5 md:max-w-2/3 justify-center text-gray-300
        `}
    >
        <hr />
      <span className="flex flex-col mt-5 md:flex-row justify-center items-center gap-3 md:gap-0 sm:justify-between sm:flex">
        <figure className="w-1/2 justify-center flex">
          <Image
            alt="Logo Kanee Sell"
            src={logo}
            width={50}
            height={50}
            className="h-12 md:h-15 w-12 md:w-15"
          />
        </figure>
        <span className="flex flex-col sm:flex gap-1 sm:text-sm text-nowrap items-center w-1/2 justify-center leading-3">
          <span className="flex gap-1 sm:text-sm text-nowrap">
            <p>© 2025</p>
            <p className="text-white font-semibold">Kane&apos;e Sell</p>
          </span>
          <p>Todos os direitos reservados.</p>
        </span>
      </span>
    </footer>
  );
}
