import clsx from "clsx";
import { useState } from "react";

export default function ImageCollege() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => setIsOpen(!isOpen);

  console.log(isOpen);

  return (
    <div
      className="mt-8 w-full h-40 rounded-3xl grid grid-cols-3 gap-3"
      id="imageCollege"
    >
      <div
        onClick={toggleIsOpen}
        className={clsx(
          "w-full h-full relative border-4 rounded-xl border-blue-300 transition-all duration-300 ease-out cursor-pointer",
          !isOpen ? "-rotate-6 translate-x-16 translate-y-10 scale-90" : "",
          !isOpen
            ? "hover:translate-y-8 hover:translate-x-12 hover:-rotate-3"
            : "hover:scale-110"
        )}
      >
        <img
          src="/src/assets/exp1.png"
          alt="AA"
          className="object-cover w-full rounded-xl bg-transparnt h-full"
        />
      </div>
      <div
        onClick={toggleIsOpen}
        className={clsx(
          "w-full h-full relative border-4 rounded-xl border-blue-300 transition-all duration-300 ease-out cursor-pointer",
          !isOpen ? "hover:-translate-y-2" : "hover:scale-110"
        )}
      >
        <img
          src="/src/assets/exp2.png"
          alt="AA"
          className="object-cover w-full rounded-xl bg-transparent h-full"
        />
      </div>
      <div
        onClick={toggleIsOpen}
        className={clsx(
          "w-full h-full relative border-4 rounded-xl border-blue-300 transition-all duration-300 ease-out cursor-pointer",
          !isOpen ? "rotate-12 -translate-x-16 translate-y-10 scale-90" : "",
          !isOpen
            ? "hover:translate-y-8 hover:-translate-x-12 hover:rotate-[10deg]"
            : "hover:scale-110"
        )}
      >
        <img
          src="/src/assets/exp3.png"
          alt="AA"
          className="object-cover w-full rounded-xl bg-transparent h-full"
        />
      </div>
    </div>
  );
}
