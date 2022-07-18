// import Footer from "@components/Footer/footer";
// import Main from "@components/Main/main";
import Button from "@components/lib/Button/button";
// import { BaseColor } from "./../models/enums/base-color.enum";
import React, { useState } from "react";
// import { Size, SIZE_MAPS } from './../models/enums/base-size.enum';
import Label, { TestLabel } from "@components/lib/Label/label";
import { FaStar } from "react-icons/fa";
import { Size } from "models/enums/base-size.enum";

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
        <div className="flex justify-center justify-items-center items-center">
          <Button text="Sign in" />

          <TestLabel type={3} bg="red"></TestLabel>

          <Label
            text="IMDB Web App"
            font="font-sans"
            textSize={Size.lg}
            padding="px-3 py-2"
            backgroundColor="red-500"
            color="yellow-400"
          />
          <Label
            text="3.2k Reviews"
            font="font-sans"
            textSize={Size.sm}
            padding="px-3 py-1"
            backgroundColor="black"
            color="yellow-400"
          />
          <Label
            text="696 Critics Review"
            font="font-sans"
            textSize={Size.sm}
            padding="px-3 py-1"
            backgroundColor="black"
            color="yellow-400"
          />
          <Label
            text="8.8"
            font="font-sans"
            textSize={Size.sm}
            padding="px-3 py-1"
            backgroundColor="yellow-400"
            color="text-black"
            icon={<FaStar />}
          />
          <Label
            text="Fight Club"
            font="font-sans"
            textSize={Size["5xl"]}
            padding="px-3 py-1"
            color="white"
          />
          <Label
            text="Drama"
            font="font-sans"
            color="yellow-400"
            textSize={Size.sm}
            rotate={90}
            textRotate={180}
            padding="px-3 py-1"
            backgroundColor="black"
          />
          <Label
            text="Director"
            font="font-sans"
            textSize={Size["2xl"]}
            padding="px-3 py-1"
            color="white"
          />
        </div>
      </div>
    </>
  );
}
