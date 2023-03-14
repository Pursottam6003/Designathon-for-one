import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import styles from './MdInput.module.scss';

const Grow = ({ content }) => (
    <div className={styles['growable-div']}>
        {content}`
        .`
    </div>
)

const MdInput = ({ value, updateVal, placeholder, editing }) => {
    const [edit, setEdit] = useState(false);
    const [text, setText] = useState(value);

    useEffect(() => {
        setText(value);
    }, [value])

    useEffect(() => {
        if (editing) editing(edit);
    }, [edit])

    const toggleEdit = () => {
        if (edit && value !== text) updateVal(text);
        setEdit(!edit);
    }

    const handleChange = (e) => {
        setText(e.target.value);
    }

    return (
        <div>
            {edit ? (
                <div className={styles['input-wrapper']}>
                    <textarea
                        value={text}
                        placeholder={placeholder}
                        autoFocus={true}
                        onChange={handleChange}
                        onBlur={() => { toggleEdit() }}
                    />
                    <Grow content={text} />
                </div>
            ) : (
                <div onClick={(e) => { toggleEdit() }}
                    className={styles['formatted-output']}
                    title="Click to edit"
                >
                    <ReactMarkdown children={value ? value : `*${placeholder}*`} rehypePlugins={[rehypeRaw]}
                        remarkPlugins={[remarkGfm]}
                    />
                </div>
            )}
        </div>
    )
}

export default MdInput;