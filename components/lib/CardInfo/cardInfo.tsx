import React from "react";
import Image from "next/image";


export default function CardInfo(props: any) {
    // const { color, fontSize } = props
    return (
        <>
            {/* <div
                className={
                    `flex  ${props.padding} ${props.backgroundColor} ${props.rotate}
                     `
                }
            > */}

            <div className={
                `flex flex-row w-fit ${props.padding} ${props.backgroundColor} ${props.rotate}
         `
            }>
                {props.source?.map((item: any, itemKey: number) => (
                    <div className="ml-2 flex flex-row">
                        <Image className="rounded" src={'/images/David-Cronenberg.jpg'} width='50px' height='50px' />
                        <div className="flex flex-col ml-2">
                            <span className={`${props.fontName} ${props.textSizeName} 
                        ${props.textColorName}`}>{item.name}</span>
                            <span className={`${props.fontJob} ${props.textSizeJob} ${props.textColorJob}`}>
                                {item.jobPosition}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            {/* </div> */}
        </>
    );
}