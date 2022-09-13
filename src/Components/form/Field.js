import React from "react"

export const Field = (props) => {
    const { children, labeltxt, showLabel, cls } = props
    if (cls) {
        return (
            <div className={`form-field ${cls}`}>
                {parseInt(showLabel) !== 0 && (
                    <label className='field-label'>{labeltxt}</label>
                )}
                {children}
            </div>
        )

    } else {
        return (
            <div className="form-field">
                {parseInt(showLabel) !== 0 && (
                    <label className='field-label'>{labeltxt}</label>
                )}
                {children}
            </div>
        )
    }
}