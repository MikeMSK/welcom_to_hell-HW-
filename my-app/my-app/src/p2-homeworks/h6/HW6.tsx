import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import s from "./HW6.module.css"

function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        setValue(restoreState<string>('editable-span-value', value))
        // setValue()
    }

    return (
        <div>
            <div className={s.marginHeader}>
                <span className={s.hw6}>
                    homework 6
                </span>
            </div>
            <div className={s.editableSpan}>
                <SuperEditableSpan value={value}
                                   onChangeText={setValue}
                                   spanProps={{children: value ? undefined : 'enter text...'}}
                />
            </div>

            <SuperButton onClick={save}>save</SuperButton>
            <SuperButton onClick={restore}>restore</SuperButton>
        </div>
    )
}

export default HW6
