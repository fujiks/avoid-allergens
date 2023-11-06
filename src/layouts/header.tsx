import { Drawer } from "components/drawer";
import { Navbar } from "components/navbar";
import { useRouter } from "next/router";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { PATH_NAME } from "utils/const";

export const Header = () => {
  const router = useRouter();
  const pathname: string = router.pathname;
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Navbar>
        <div className=" flex items-center">
          <button className="button px-4 py-3" onClick={() => setOpen(true)}>
            <FiMenu size={24} />
          </button>
          <div className="py-3">{PATH_NAME[pathname]}</div>
        </div>
      </Navbar>
      <Drawer placement="left" open={open} onClose={() => setOpen(false)}>
        {Object.keys(PATH_NAME).map((key, idx) => (
          <ListPage
            key={idx}
            isSelect={pathname === key}
            name={PATH_NAME[key]}
            onClick={() => {
              router.push(key);
              setOpen(false);
            }}
          />
        ))}
      </Drawer>
    </>
  );
};
interface ListPageProps {
  name: string;
  isSelect: boolean;
  onClick?: () => void;
}
const ListPage = ({ name, isSelect, onClick }: ListPageProps) => {
  return <div className={`py-2 ${isSelect? 'text-orange': ''}`} onClick={onClick}>{name}</div>;
};
