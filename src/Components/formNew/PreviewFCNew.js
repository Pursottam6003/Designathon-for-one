import { useEffect, useState } from 'react';
import { CategoryTitles } from '../../helpers/helpers';
import formSchema from '../../helpers/formSchema';
import templates from '../../helpers/previewTemplate';
import { ReactComponent as MarkdownIcon } from '../../images/icons/markdownIcon.svg';
import { ReactComponent as SpinnerIcon } from '../../images/icons/spinner.svg'
import NoPreview from '../NoPreview';
import PreviewedInput from '../MdInput/MdInput'
import styles from './Preview.module.scss';
import cx from 'classnames';

const PreviewFc = ({ display, category, fields, images = [], imgCaption, submit, switchForm, loading = false }) => {
  const [desc, setDesc] = useState('');
  const [editing, setEditing] = useState(false);
  const [labels, setLabels] = useState({});

  const getPreviewFields = (fields) => {
    if (category === '0' || !labels) return fields;
    const newFields = {};

    Object.keys(labels).forEach(field => {
      if (field === 'activityTitle') return;
      if (!fields[field]) {
        newFields[field] = labels[field] ? labels[field].toUpperCase() : '';
      } else if (field === 'pi' || field === 'copi' || field === 'author') {
        let outStr = '', sep = ', ';
        if (fields[field].length) {
          if (field === 'pi') {
            outStr += fields[field].map((el, i) => {
              if (i === fields[field].length - 2) sep = 'and '
              if (i === fields[field].length - 1) sep = ''
              return `${el.name}, ${el.designation}, ${el.department} ${sep}`
            }).join('')
            outStr += fields[field].length > 1 ? ' as Principal Investigators' : ' as a Principal Investigator'
          } else if (field === 'copi') {
            outStr += fields[field].map((el, i) => {
              if (i === fields[field].length - 2) sep = 'and '
              if (i === fields[field].length - 1) sep = ''
              return `${el.name}, ${el.designation}, ${el.department} ${el.insName ? ', '+el.insName : ''}${sep}`
            }).join('')
            outStr += ' and ' + fields[field].length > 1 ? ' as Co-Principal Investigators' : ' as a Co-Principal Investigator'
          } else if (field === 'author') {
            outStr += fields[field].map((el, i) => {
              if (i === fields[field].length - 2) sep = 'and '
              if (i === fields[field].length - 1) sep = ''
              return `${el.lastName}, ${el.firstInitials.toUpperCase()}.`
            }).join('')
          }
        }
        newFields[field] = outStr ? outStr : labels[field].toUpperCase();
      } else {
        newFields[field] = fields[field]; 
      }
    })
    return newFields;
  }

  const updatePreview = () => {
    if (!templates[category]) setDesc('');
    else setDesc(templates[category](getPreviewFields(fields)));
  }

  const handleSubmit = (event) => {
    if (document.getElementById('activityForm').checkValidity()) {
      event.preventDefault();
      submit(desc);
    } else {
      switchForm(true);
    }
  }

  useEffect(() => {
    let labels = {};
    formSchema[category].filter(field => (
      field.type !== 'sectionHeading'
      && field.type !== 'person'
      && field.type !== 'file'
      && field.type !== 'radio'
    )).forEach(field => {
      if (field.type === 'dateRange') {
        labels = { ...labels, date: field.from.placeholder, toDate: field.to.placeholder }
      } else {
        labels = { ...labels, [field.name]: field.required || field.type === 'list' ? field.placeholder: '' }
      }
    })
    setLabels(labels);
  }, [category])

  useEffect(() => {
    updatePreview();
  // eslint-disable-next-line
  }, [fields])

  return (
    <div className={styles.preview} style={{ display: display }} >
      {parseInt(category) === 0 ? <NoPreview /> : (<>
        <div className={cx(styles['formatted-preview-wrapper'], { [styles.active]: editing })}>
          <div className={styles.previews}>
            <h1>{fields.activityTitle ? fields.activityTitle : CategoryTitles[parseInt(category)]?.length > 0 ? CategoryTitles[parseInt(category)] : <em>Untitled</em>}</h1>
            <PreviewedInput
              placeholder='Your output will show here'
              value={desc}
              updateVal={txt => { setDesc(txt) }}
              editing={status => { setEditing(status) }}
            />
          </div>
          <footer className={styles['markdown-support']}>
            <p>
              Click to edit
              <a className={styles['text-link']} target='_blank' rel='noreferrer' href='https://guides.github.com/features/mastering-markdown/'>
                <MarkdownIcon className={styles['markdown-icon']} />
                <span>Styling with Markdown is supported</span>
              </a>
            </p>
          </footer>
        </div>

        <div className={styles['image-preview']}>
          {images.map((img, i) => <img key={i} alt="" src={URL.createObjectURL(img)} />)}
        </div>
        {images.length !== 0 && (category !== 1 || category !== 3) && (
          <p className={styles['img-caption-preview']}>{imgCaption}</p>
        )}
        <div className={styles.actions}>
          <button
            id='submitBtn'
            form='activityForm'
            type='submit'
            disabled={loading}
            onClick={handleSubmit}
            className={cx(styles.btn, styles.submit)}>
            {!loading ? 'Submit' : <SpinnerIcon />}
          </button>
          <button disabled={loading} onClick={updatePreview} className={cx(styles.btn, styles.reset)}>Reset</button>
        </div>
      </>)}
    </div>
  )
}

export default PreviewFc;