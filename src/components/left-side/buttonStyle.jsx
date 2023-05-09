import { leftArrow } from "..";

export const ButtonStyleOne = ({ text, onClick }) => {
    return (
      <a
        href="#_"
        className="inline-flex items-center justify-center ms-2 md:ms-0  px-6 py-3 mb-2 text-xs md:text-sm text-[#7A7272
        ] border border-gray-600 rounded-md hover:bg-red-500"
        data-primary="green-400"
        data-rounded="rounded-2xl"
        data-primary-reset="{}"
        onClick={onClick}
      >
        {text}
        <svg
          className="w-4 h-4 ml-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
    );
  };

export  const ButtonStyleTwo = ({ text, onClick }) => {
    return (
      <a
        href="#_"
        className="inline-flex items-center justify-center ms-2 md:ms-0  px-6 py-3 mb-2 text-xs md:text-sm text-[#7A7272
        ] border-none transition-all duration-200 rounded-md hover:bg-red-500"
        data-primary="green-400"
        data-rounded="rounded-2xl"
        data-primary-reset="{}"
        onClick={onClick}
      >
        <img src={leftArrow} width={18} className="me-3" alt="" />
        {text}
      </a>
    );
  };