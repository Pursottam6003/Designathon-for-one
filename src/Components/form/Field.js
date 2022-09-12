import React from "react"

export const Field = (props) => {
    const { children, labeltxt, showLabel } = props
    return (
        <div className='form-field'>
            {parseInt(showLabel) !== 0 && (
                <label className='field-label'>{labeltxt}</label>
            )}
            {children}
        </div>
    )
}