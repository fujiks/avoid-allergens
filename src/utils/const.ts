interface PathNameProps {
  [key: string]: string;
}

interface AllergenProps {
  name: string;
  type?: string;
}

interface AllergensProps extends Array<AllergenProps> {}

export const PATH_NAME: PathNameProps = {
  "/detect-allergens": "ตรวจหาสารแพ้",
  "/allergy-information": "รายการสารแพ้",
  "/update-allergens": "แก้ไขข้อมูลสารแพ้",
  "": "",
};

export const ALLERGENS_INFO: AllergensProps = [
  {
    name: "fragrance",
    type: "น้ำหอม",
  },
  {
    name: "benzalkonium chloride",
    type: "สารลดแรงตึง",
  },
  {
    name: "cetrimonium chloride",
    type: "",
  },
  {
    name: "cetrimonium bromide",
    type: "",
  },
  {
    name: "cetrimide",
    type: "",
  },
  {
    name: "sodium dehydroacetate",
    type: "",
  },
  {
    name: "sodium benzoate",
    type: "",
  },
  {
    name: "calcium propionate",
    type: "",
  },
  {
    name: "colophonium",
    type: "",
  },
  {
    name: "linear alkylbenzene sulfonate",
    type: "",
  },
  {
    name: "sodium cocoyl glutamate",
    type: "",
  },
  {
    name: "sodium lauryl sulfate",
    type: "",
  },
  {
    name: "sodium lauryl ether sulfate",
    type: "",
  },
  {
    name: "sodium laureth sulfate",
    type: "",
  },
  {
    name: "cocamidopropyl betaine",
    type: "",
  },
  {
    name: "paraphenylenediamine",
    type: "",
  },
  {
    name: "ppd",
    type: "",
  },
  {
    name: "butylene glycol",
    type: "",
  },
];

export const getAllergensInfo = (): AllergensProps => {
  const allergens_info = localStorage.getItem("allergens_info");
  try {
    if (allergens_info !== null) {
      return JSON.parse(allergens_info);
    }
    return [];
  } catch (e) {
    return [];
  }
};

export const setAllergensInfo = (allerInfo: AllergensProps) => {
  localStorage.setItem("allergens_info", JSON.stringify(allerInfo));
};
