import { ButtonHTMLAttributes, HTMLInputTypeAttribute } from "react";
import { FieldErrors, FieldValue, FieldValues, UseFormRegister } from "react-hook-form";

interface props {
    onClick?: () => void,
    label?: string,
    type: "button" | "submit"
}
export default function Button({ onClick, label, type }:props) {
    return (
        <>
            <button type={type} onClick={onClick} className="bg-slate-900 text-white 
                active:bg-blueGray-600 text-sm font-bold uppercase 
                px-6 py-3 rounded shadow hover:shadow-lg outline-none 
                focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"> {label} </button>
        </>
    );
}
