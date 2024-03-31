'use client'
import { useState } from "react";

interface props {
    label?: string,
    onChange?: (value: boolean) => void,
    value?: boolean
}
export default function CheckBox({ label,onChange,value = false }: props) {
    const [checked, setChecked] = useState(value);

    // Función de manejo de cambios
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;
        setChecked(isChecked);
        if (onChange) {
            onChange(isChecked);
        }
    };


    function showLabel() {
        if (label) {
            return <span className="ml-2 text-sm font-semibold text-slate-900">{label}</span>
        }
    }
    return (
        <>
            <label className="inline-flex items-center cursor-pointer">
                <input id="customCheckLogin" type="checkbox"
                    checked={checked} 
                    onChange={handleChange}
                    className="form-checkbox border-0 rounded cursor-pointer text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150" />
                {showLabel()}
            </label>
        </>
    );
}
