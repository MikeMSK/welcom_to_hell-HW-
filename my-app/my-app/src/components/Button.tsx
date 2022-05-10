import React from 'react';

type ButtonType = {
    name: string
    callBack: (name: string) => void
}

const Button = (props: ButtonType) => {

    const onClickHandler = (name: string) => {
        props.callBack(name)
    }
    return (
        <div>
            <button onClick={() => onClickHandler(props.name)}>
                {props.name}
            </button>
        </div>
    );
};

export default Button;
