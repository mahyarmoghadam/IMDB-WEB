import React from "react";

export default function Label(props: any) {
    // const { color, fontSize } = props
    return (
        <>
            <div
                className={
                    `${props.textColor} ${props.padding} ${props.backgroundColor} ${props.rotate}
                     rounded ${props.font} ${props.textSize} w-fit`
                }
            >
                <span className="flex justify-center justify-items-center items-center">
                    <span className="mr-1">{props.icon}</span>
                    <span className={`${props.textRotate}`}>{props.text}</span>
                </span>
            </div>
        </>
    );
}