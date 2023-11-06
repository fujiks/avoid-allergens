import React, { useRef, useState } from "react";
import { Button } from "components/button";
import { InputImage, TextArea } from "components/input";
import { Radio, RadioGroup } from "components/radio";
import { motion } from "framer-motion";
import { createWorker } from "tesseract.js";
import { Result } from "./components/Result";
import { ALLERGENS_INFO, getAllergensInfo } from "utils/const";

const CHOOSE_MODE = [
  { value: "image", label: "รูปภาพ" },
  { value: "text", label: "กรอกข้อความ" },
];

export const DetectAllergensMain = () => {
  const [mode, setMode] = useState(CHOOSE_MODE[0].value);
  const [image, setImage] = useState("");
  const [textInput, setTextInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [allergens, setAllergens] = useState({
    count: 0,
    message: "",
  });

  const handleOnClick = async () => {
    setLoading(true);
    if (mode === "image") {
      const worker = await createWorker({
        // logger: m => console.log(m)
      });
      (async () => {
        await worker.loadLanguage("eng");
        await worker.initialize("eng");
        const {
          data: { text },
        } = await worker.recognize(image);
        await worker.terminate();
        detectAllergens(text.replace(/\r?\n|\r/g, " "));
      })();
    } else {
      detectAllergens(textInput.replace(/\r?\n|\r/g, " "));
    }
  };

  const detectAllergens = (text: string) => {
    // console.log("text", text);
    const _text = text.toLowerCase();
    const allergensInfo = getAllergensInfo();
    const aller = allergensInfo.filter((dt) => _text.includes(dt.name));
    let textHighlight = _text;
    for (const dt of aller) {
      textHighlight = textHighlight.replaceAll(
        dt?.name,
        `<span class='text-red font-semibold'>${dt?.name}</span>`
      );
    }

    setAllergens({
      count: aller.length,
      message: textHighlight,
    });
    setLoading(false);
  };

  const checkDisabledButton = () => {
    if (loading) {
      return true;
    }
    if (mode === "image") {
      return !Boolean(image);
    } else {
      return !Boolean(textInput);
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="text-purple text-xl">ข้อมูลที่ต้องการตรวจสอบ</div>
      <div className="flex flex-col gap-3">
        <RadioGroup
          value={mode}
          options={CHOOSE_MODE}
          onChange={(m) => {
            setMode(m);
            setImage("");
            setTextInput("");
            setAllergens({
              count: 0,
              message: "",
            });
          }}
        />
        <div>
          {mode === "image" ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, origin: 1 }}
            >
              <InputImage src={image} onSelectFile={(img) => setImage(img)} />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, origin: 1 }}
            >
              <TextArea value={textInput} onChange={setTextInput} />
            </motion.div>
          )}
        </div>
      </div>
      <Button disabled={checkDisabledButton()} onClick={handleOnClick}>
        ค้นหา
      </Button>
      <Result count={allergens?.count} message={allergens?.message} />
    </div>
  );
};
