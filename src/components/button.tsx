import { useRouter } from "next/router";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { PATH_NAME } from "utils/const";
import { Drawer } from "./drawer";
import { motion } from "framer-motion";

interface ButtonProps {
  children: any;
  onClick: any;
  disabled?: boolean;
}

export const Button = (props: ButtonProps) => {
  const { children, disabled } = props;
  return (
    // <motion.button whileTap={disabled ? {} : { scale: 0.95 }}>
    <button
      className={`button-fade w-full p-3 ${
        disabled ? "bg-fadeGray" : "bg-fadePurple"
      } text-white rounded-md`}
      {...props}
    >
      {children}
    </button>
    // </motion.button>
  );
};
