"use client";
import React from "react";
import Image from "next/image";

interface Props {
  src: string | null | undefined;
}

const Avatar: React.FC<Props> = ({ src }) => {
  return (
    <Image
      alt="avatar"
      src={src ? src : "/images/placeholder.jpg"}
      height="30"
      width="30"
      className="rounded-full"
    />
  );
};

export default Avatar;
