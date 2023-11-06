import { useRouter } from "next/router";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { PATH_NAME } from "utils/const";
import { Drawer } from "./drawer";

interface NavbarProps {
  children: any;
}

export const Navbar = ({ children }: NavbarProps) => {
  return (
    <>
      <div className="w-full flex justify-between z-10 bg-white fixed">
        {children}
      </div>
      <div className="pt-12" />
    </>
  );
};
