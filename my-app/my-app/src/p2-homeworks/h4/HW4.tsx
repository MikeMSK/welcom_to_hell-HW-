import React, {ChangeEvent, useState} from 'react'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import s from './HW4.module.css'
import SuperButton from './common/c2-SuperButton/SuperButton'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'

function HW4() {
    const [text, setText] = useState<string>('')
    const error = text ? '' : 'error'

    const showAlert = () => {
        if (error) {
            alert('введите текст...')
        } else {
            alert(text) // если нет ошибки показать текст
        }
    }

    const [checked, setChecked] = useState<boolean>(false)
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)

    return (
        <div className={s.marginHeader}>
            <span className={s.hw4}>
                homeworks 4
            </span>

            <div className={s.column}>

                <SuperInputText value={text}
                                onChangeText={setText}
                                onEnter={showAlert}
                                error={error}
                    // spanClassName={s.testSpanError}
                />

                <SuperInputText className={s.blue} // проверьте, работает ли смешивание классов
                />

                {/*----------------------------------------------------*/}
                <div className={s.superButtons}>
                    <SuperButton>
                        default
                    </SuperButton>

                    <SuperButton red // пропсу с булевым значением не обязательно указывать true
                                 onClick={showAlert}>
                        del {/*// название кнопки попадёт в children*/}
                    </SuperButton>

                    <SuperButton disabled>
                        disabled
                    </SuperButton>
                </div>
                {/*----------------------------------------------------*/}

                <SuperCheckbox checked={checked}
                               onChangeChecked={setChecked}>
                    some text {/*// этот текст попадёт в children*/}
                </SuperCheckbox>

                {/*// onChange тоже должен работать*/}
                <SuperCheckbox checked={checked}
                               onChange={testOnChange}/>
            </div>

        </div>
    )
}

export default HW4
