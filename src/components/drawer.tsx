import { Drawer as DrawerAntd } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { PATH_NAME } from "utils/const";

interface DrawerProps {
  children: any;
  open: boolean;
  width?: string | number;
  closable?: boolean;
  placement?: "left" | "right" | "bottom" | "top";
  onClose?: () => void;
}

export const Drawer = (props: DrawerProps) => {
  const { children, width, placement, open, onClose, closable } = props;
  return (
    <>
      <DrawerAntd
        width={width || 200}
        closable={closable || false}
        placement={placement || "left"}
        open={open}
        onClose={onClose}
      >
        {children}
      </DrawerAntd>
    </>
  );
};
