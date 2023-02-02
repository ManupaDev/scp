"use client";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import clsx from "clsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="px-4 py-2 flex justify-between border border-black relative ">
      <div></div>
      <NavIcon isOpen={isOpen} handleNavToggle={handleNavToggle} />
      <div
        className={clsx(
          "flex flex-col bg-slate-100 rounded-md border border-black px-4 py-2 absolute top-10 right-0",
          {
            hidden: !isOpen,
          }
        )}
      >
        <h1>Hello</h1>
      </div>
    </nav>
  );
};

function NavIcon({
  isOpen,
  handleNavToggle,
}: {
  isOpen: boolean;
  handleNavToggle: () => void;
}) {
  if (isOpen) {
    return <XMarkIcon width={24} height={24} onClick={handleNavToggle} />;
  }

  return <Bars2Icon width={24} height={24} onClick={handleNavToggle} />;
}

export default Navbar;
