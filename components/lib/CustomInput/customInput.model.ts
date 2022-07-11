import { ChangeEventHandler } from "react";
export interface ICustomSearchInput {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    onChange: ChangeEventHandler<HTMLInputElement>;
    isDisable?: boolean;
    placeholder?: string;
}