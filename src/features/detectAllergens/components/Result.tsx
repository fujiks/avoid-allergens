import React, { useRef, useState } from "react";

interface Props {
  count: number;
  message: string;
}
export const Result = ({ count, message }: Props) => {
  if (Boolean(message)) {
    return (
      <div className="flex flex-col gap-4">
        <div>
          จำนวนสารที่แพ้:{" "}
          <span className="text-red font-semibold">{count}</span>
        </div>
        <div
          className="rounded-lg border-2 border-orange p-4"
          dangerouslySetInnerHTML={{ __html: message }}
        ></div>
      </div>
    );
  }
  return <></>;
};
