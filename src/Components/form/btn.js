import React from 'react'

const Btn = (props) => {
    const { type, innerText } = props
    return (
        <button type={type}>
            {innerText}
        </button>
    )
}

export default { Btn }