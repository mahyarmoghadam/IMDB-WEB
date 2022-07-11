import Footer from "@components/Footer/footer";
import Main from "@components/Main/main";
import Button from "@components/lib/Button/button";
import { BaseColor } from "./../models/enums/base-color.enum";
import React, { useState } from "react";
import { Size, SIZE_MAPS } from './../models/enums/base-size.enum';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState(false);
  const [deliverables, setDeliverables] = useState(false);
  const [profile, setProfile] = useState(false);
  return (
    <>
      <div className="absolute h-screen justify-between bg-gray-200 w-full">
        {/* Navigation starts */}
        {/* Mobile */}

        {/* <Footer /> */}
        {/* <Button color={BaseColor.YELLOW} fontSize={Size.XXLARGE} text='Sign in' backgroundColor={BaseColor.YELLOW} /> */}
        {/* <button className="p-6 bg-red-800 rounded-md border-2 border-gray-800">data</button> */}
        <Button text='Sign in'></Button>
      </div>
    </>
  );
}
