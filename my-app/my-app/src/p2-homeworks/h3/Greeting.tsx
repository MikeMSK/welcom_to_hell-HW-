import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    totalUsers: number
    addUser: () => void
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
    error: string
}

const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, onEnter, addUser, error, totalUsers}
) => {

    const inputClass = error ? s.errorInput : s.input

    return (
        <div className={s.menu}>
            <div>
                <input value={name}
                       onChange={setNameCallback}
                       className={inputClass}
                       onKeyDown={onEnter}
                       onBlur={setNameCallback}
                />
                <span className={s.error}>
                    {error}
                </span>
            </div>
            <div className={s.buttonAdd}>
                <button onClick={addUser}
                        className={s.button}
                        disabled={!name}>
                    +
                </button>
                <span>Counter {totalUsers}</span>
            </div>
        </div>
    )
}

export default Greeting
