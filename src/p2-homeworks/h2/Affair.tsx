import React from 'react'
import s from "./Affairs.module.css";
import {AffairType} from "./HW2";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div className={s.nameStatusTask}>
            <div className={s.name}>
                {props.affair.name}
            </div>
            <div className={s.priority}>
                [{props.affair.priority}]
            </div>
            <button className={s.button}
                    onClick={deleteCallback}>
                x
            </button>
        </div>
    )
}

export default Affair
