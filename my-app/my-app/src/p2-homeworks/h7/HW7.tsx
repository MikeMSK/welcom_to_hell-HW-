import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import s from "./HW7.module.css";

const arr = ['x', 'y', 'z']

function HW7() {
    const [value, onChangeOption] = useState(arr[1])

    return (
        <div>
            <div className={s.marginHeader}>
                <span className={s.hw7}>
                    homework 7
                </span>
            </div>
            <div className={s.body}>
                <div>
                    <SuperSelect options={arr}
                                 value={value}
                                 onChangeOption={onChangeOption}
                    />
                </div>
                <div>
                    <SuperRadio name={'radio'}
                                options={arr}
                                value={value}
                                onChangeOption={onChangeOption}
                    />
                </div>
            </div>
        </div>
    )
}

export default HW7
