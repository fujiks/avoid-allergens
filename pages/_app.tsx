import { Navbar } from "components/navbar";
import type { AppProps } from "next/app";
import "../public/style.css";
import { Header } from "layouts/header";
import { useEffect } from "react";
import { ALLERGENS_INFO } from "utils/const";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const allergens_info = localStorage.getItem("allergens_info");
    if (!Boolean(allergens_info)) {
      const all_if = JSON.stringify(ALLERGENS_INFO);
      localStorage.setItem("allergens_info", all_if);
    }
  }, []);
  return (
    <div className=" border-x-greenFade">
      <Header />
      <div className="p-4">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
