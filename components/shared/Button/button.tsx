import React from "react";
import { ButtonModel } from "./button.model";


export default function Button(props: ButtonModel) {
    return (
        <>
            <button className={`
            bg-${props.backgroundColor}
            rounded-${props.borderRadius}
            border-${props.border}
            `}>
                {props.text}
            </button>
        </>
    );
};