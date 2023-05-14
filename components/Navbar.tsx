"use client";
import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import UserMenu from "./UserMenu";
import { SafeUser } from "@types";
import Categories from "./Categories";

interface Props {
  currentUser: SafeUser | null;
}

const Navbar: React.FC<Props> = ({ currentUser }) => {
  return (
    <nav className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Searchbar />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
      <Categories />
    </nav>
  );
};

export default Navbar;
