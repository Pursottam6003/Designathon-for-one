import { ReactComponent as DoneIcon } from '../../images/icons/done.svg'
import { ReactComponent as RemoveIcon } from '../../images/icons/remove.svg'
import { ReactComponent as UndoIcon } from '../../images/icons/undo.svg'
import { ReactComponent as DeleteIcon } from '../../images/icons/delete.svg'
import { CategoryTitles } from "../../helpers/helpers"
import PreviewedInput from '../MdInput/MdInput'
import styles from './Submission.module.scss';

const Submission = ({ id, categoryId, author, title, created, desc, type, imgUrl, imgCaption, update, reject, approve, moveBack }) => (
  <tr className={styles.submission}>
    <td>{author}</td>
    <td>
      <PreviewedInput value={title}
        placeholder={CategoryTitles[categoryId]}
        updateVal={(txt) => { update(id, type, 'title', txt) }}
      />
    </td>
    <td>
      <PreviewedInput value={desc}
        placeholder='Description'
        updateVal={(txt) => { update(id, type, 'desc', txt) }}
      />
      {imgUrl.length !== 0 && (<>
        <div className={styles.images}>
          {imgUrl.map(url => (
            <div key={url} className={styles['image-wrapper']}>
              <button title='Detele' className={styles.btn}
                onClick={(e) => {e.preventDefault(); update(id, type, 'imgUrl', url)}} 
              >
                <DeleteIcon />
              </button>
              <img src={url} alt="" />
            </div>
          ))}
        </div>
        <div className={styles['img-caption']}>
          <PreviewedInput value={imgCaption}
            placeholder='Image Caption'
            updateVal={(txt) => { update(id, type, 'imgCaption', txt) }}
          />
        </div>
      </>)}
    </td>
    <td>{created}</td>
    {type === 'pending' ? (<>
      <td>
        <button className="action-btn remove" type="button"
          onClick={(e) => { reject(id) }}
        >
          <RemoveIcon />
        </button>
      </td>
      <td>
        <button className="action-btn add" type="button"
          onClick={(e) => { approve(id) }}
        >
          <DoneIcon />
        </button>
      </td>
    </>) : (
      <td>
        <button className="action-btn" type="button"
          onClick={(e) => { moveBack(id) }}
        >
          <UndoIcon />
        </button>
      </td>
    )}
  </tr>
)

export default Submission;