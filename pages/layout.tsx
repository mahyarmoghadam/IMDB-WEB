import Footer from "@components/Footer/footer";
import Main from "@components/Main/main";
import Button from "@components/lib/Button/button";
import { BaseColor } from "./../models/enums/base-color.enum";
import React, { useState } from "react";
import { Size, SIZE_MAPS } from './../models/enums/base-size.enum';
import CustomSearchInput from '@components/lib/CustomInput/CustomInput';
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
      <div className="mt-4 ml-4">
          <CustomSearchInput
            onChange={(e: any) => console.log(e.target.value)}
            onClick={() => console.log('clicked')}
            placeholder={'What Are You Looking For?'}
          />
      </div>
    </>
  );
}
