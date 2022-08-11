import { ReactNode } from "react";
import Sidebar from "./Sidebar";

type Props = {
  children: ReactNode;
};

export const Theme = ({ children }: Props) => {
  return (
    <>
      <Sidebar children={children}></Sidebar>
    </>
  );
};