import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from "./SuperRadio.module.css"

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChangeOption) {
            onChangeOption(e.currentTarget.checked)
        }
        onChange && onChange(e)
        // onChange
        // onChange, onChangeOption
    }

    const mappedOptions: any[] = options ? options.map((opt, i) => ( // map options with key
        <label key={name + '-' + i}>
            <input className={s.radio}
                   type={'radio'}
                   name={"radio"}
                   checked={opt === value}
                   value={opt}
                   onChange={onChangeCallback}
                // name, checked, value, onChange
                   {...restProps}
            />
            {opt}
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
