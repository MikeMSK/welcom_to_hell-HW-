import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from "./SuperSelect.module.css"

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        className,
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options ? options.map((opt, i) => (
        <option className={s.option}
                key={opt + '-' + i}
                value={opt}>{opt}</option>
    )) : []; // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChangeOption) {
            onChangeOption(e.currentTarget.value)
        }
        onChange && onChange(e)
        // onChange, onChangeOption
    }
    const selectOldStyle = s.select + (className ? " " + className : "")

    return (
        <select className={selectOldStyle}
                onChange={onChangeCallback}
                {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
