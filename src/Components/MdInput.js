import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const growableStyles = {
    gridArea: '1 / 1 / 2 / 2',
    overflowX: 'auto',
}

const defaultFontStyles = {
    fontSize: '0.95rem',
    fontFamily: `"Segoe UI", "Segoe WP", Tahoma, Arial, sans-serif, Roboto`,
    lineHeight: 1.42857143,
    borderBottom: 'solid 2px transparent',
}

const defaultSpacing = {
    padding: '0.325rem 0.625rem',
}

const Grow = ({ content, propstyles }) => (
    <div style={{
        ...propstyles,
        visibility: 'hidden',
        whiteSpace: 'pre-wrap'
    }} >
        {content}`
        .`
    </div>
)

export const PreviewedInput = ({ value, inpClassName, updateVal, placeholder }) => {
    const [edit, setEdit] = useState(false);

    const defStyles = !inpClassName ? {...defaultFontStyles, ...defaultSpacing} : {};
    placeholder = placeholder ? placeholder : value

    const toggleEdit = () => {
        setEdit(!edit);
    }

    const handleChange = (e) => {
        updateVal(e.target.value)
    }

    return (
        <div>
            {edit ? (
                <div style={{ display: 'grid' }}>
                    <textarea style={{
                        ...growableStyles, 
                        ...defStyles, 
                        display: 'block', 
                        overflow: 'hidden',
                        resize: 'none',
                    }} 
                        value={value}
                        autoFocus={true}
                        onChange={handleChange}
                        onBlur={() => {toggleEdit()}}
                        className={inpClassName} />
                    <Grow propstyles={{
                        ...growableStyles,
                        ...defStyles,
                    }} content={value} />
                </div>
            ) : (
                <div onClick={(e) => {toggleEdit()}}
                    style={{ cursor: 'pointer' }}
                    title="Click to edit"
                >
                    <ReactMarkdown children={placeholder} rehypePlugins={[rehypeRaw]}
                        remarkPlugins={[remarkGfm]}
                    />
                </div>
            )}
        </div>
    )
}

