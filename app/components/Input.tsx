import { HTMLInputTypeAttribute } from "react";
import { FieldErrors, FieldValue, FieldValues, UseFormRegister } from "react-hook-form";

interface props {
    type: HTMLInputTypeAttribute,
    label?: string,
    required: string,
    register: UseFormRegister<any>,
    id: string,
    errors?: any
}
export default function Input({ type, label, required, register, id, errors }:props) {

    function showLabel() {
        if(label) {
            return <label className="block text-gray-700 text-sm font-bold mb-2" >{label}</label>
        }
    }
    return (
        <>
            { showLabel() } 
            <input className="bg-gray-200 text-gray-700 focus:ring-2
                focus:outline-none focus:shadow-outline focus:ring-blue-600 border border-gray-300 rounded py-2 
                px-4 block w-full appearance-none transition-all" type={type} 
                { ...register(id, {required: required}) }
            >
            </input>
            <span className="text-red-500 font-semibold text-sm">{errors[id]?.message}</span>
        </>
    );
}
