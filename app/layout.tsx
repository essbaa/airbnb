import "@styles/globals.css";
import React from "react";
import { Nunito } from "next/font/google";
import Navbar from "@components/Navbar";
import RegisterModal from "@components/Modals/RegisterModal";
import ToasterProvider from "@providers/ToasterProvider";

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

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
