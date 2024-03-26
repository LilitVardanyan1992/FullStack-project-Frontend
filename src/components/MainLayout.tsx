"use client";
import React, { ReactNode, useState } from "react";
import Header from "./Header";
import MenuDropDown from "./MenuDropDown";
import { useRouter } from "next/navigation";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  function handleIsLoginedUser() {
    if (localStorage.getItem("token")) {
      if (!showMenu) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
    } else {
      router.push("/login");
    }
  }

  return (
    <div className="max-w-2800">
      <Header handleIsLoginedUser={handleIsLoginedUser} />
      {showMenu && <MenuDropDown />}
      {children}
    </div>
  );
};

export default MainLayout;
