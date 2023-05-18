import "@styles/globals.css";
import React from "react";
import { Nunito } from "next/font/google";
import Navbar from "@components/Navbar";
import RegisterModal from "@components/Modals/RegisterModal";
import ToasterProvider from "@providers/ToasterProvider";
import LoginModal from "@components/Modals/LoginModal";
import getCurrentUser from "@actions/getCurrentUser";
import RentModal from "@components/Modals/RentModal";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

interface Props {
  children: React.ReactNode;
}

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({ children }: Props) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RegisterModal />
        <LoginModal />
        <RentModal />
        <Navbar currentUser={currentUser} />
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
