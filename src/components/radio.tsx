import { useRouter } from "next/router";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { PATH_NAME } from "utils/const";
import { Drawer } from "./drawer";
import { motion } from "framer-motion";

interface RadioGroupProps {
  value: string;
  options: OptionsProps[];
  onChange(value: string): any;
}
interface OptionsProps {
  value: string;
  label: string;
}
interface RadioProps extends OptionsProps {
  selected: boolean;
  isAfter: boolean;
  onClick(value: string): any;
}

export const RadioGroup = ({
  value,
  options = [],
  onChange,
}: RadioGroupProps) => {
  const [animation, setAnimation] = useState({ index: 0, back: false });
  const handleOnChange = (v: string, i: number) => {
    setAnimation({
      index: i,
      back: i < animation.index,
    });
    onChange(v);
  };
  return (
    <div className="flex gap-3 justify-center">
      {options.map((props, idx) => {
        const selected = value === props.value;

        return (
          <Radio
            key={idx}
            {...props}
            isAfter={
              animation.back ? idx > animation.index : idx >= animation.index
            }
            selected={selected}
            onClick={(v) => handleOnChange(v, idx)}
          />
        );
      })}
    </div>
  );
};

export const Radio = ({
  value,
  label,
  selected,
  isAfter,
  onClick,
}: RadioProps) => {
  return (
    <button
      className={`flex flex-col ${isAfter ? "items-start" : "items-end"}`}
      onClick={() => onClick(value)}
    >
      <div className="px-2 py-3">{label}</div>

      <motion.div
        className="h-0.5 bg-lightPurple"
        animate={{ width: selected ? "100%" : 0 }}
        // transition={{ type: "spring" }}
      />
    </button>
  );
};
