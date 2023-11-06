import { useRef, useState } from "react";
import { createWorker } from "tesseract.js";
import { FiTrash } from "react-icons/fi";
export const Input = () => {
  return <input></input>;
};

interface InputImageProps {
  src: string;
  onSelectFile: (url: string, file: any) => void;
}
export const InputImage = ({ src, onSelectFile }: InputImageProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleOnFile = async (e: any) => {
    const file = e?.target?.files[0];
    if (file) {
      const _image = URL.createObjectURL(file);
      onSelectFile(_image, file);
    }
  };
  const handleOnRemove = async (e: any) => {
    onSelectFile("", null);
    if (inputRef?.current) {
      inputRef.current.value = "";
      e.preventDefault();
    }
  };
  return (
    <div className="relative w-full h-36 p-3 rounded-lg border-2 border-dashed border-lightGreen bg-lightGray">
      <input
        ref={inputRef}
        type="file"
        id="files"
        className="hidden"
        accept="image/png, image/jpeg"
        onChange={handleOnFile}
      />
      <label htmlFor="files" className="cursor-pointer">
        {src ? (
          <>
            <div className="h-full w-full flex justify-center items-center">
              <img
                className="object-cover h-full"
                alt="preview image"
                src={src}
              />
            </div>
            <button
              className="absolute bottom-0 right-0 p-2 text-orange"
              onClick={handleOnRemove}
            >
              <FiTrash />
            </button>
          </>
        ) : (
          <div className="h-full w-full text-gray flex justify-center items-center">
            กดเพื่อเลือกรูปภาพ
          </div>
        )}
      </label>
    </div>
  );
};

interface TextAreaProps {
  value: string;
  onChange: (value: string) => void;
}
export const TextArea = ({ value, onChange }: TextAreaProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleOnChange = (e: any) => {
    onChange(e?.target?.value);
  };

  return (
    // <div className="relative w-full h-36 p-3 rounded-lg border-2 border-dashed border-lightGreen bg-lightGray">
    <textarea
      className="relative w-full h-36 p-3 rounded border border-lightGreen bg-white !block resize-none"
      value={value}
      onChange={handleOnChange}
    />
    // </div>
  );
};
