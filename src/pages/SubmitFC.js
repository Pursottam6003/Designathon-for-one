import { useEffect, useState } from 'react'
import FormFC from '../Components/formNew/FormFC'
// import PreviewFC from '../Components/formNew/PreviewFC'
import PreviewFC from '../Components/formNew/PreviewFCNew'
import { storage, db } from '../config/config'
import { arrayUnion, collection, doc, setDoc } from 'firebase/firestore'
import { Categories } from '../helpers/helpers'
import { ReactComponent as NextIcon } from '../images/icons/forward-arrow.svg'
import { ReactComponent as PrevIcon } from '../images/icons/back-arrow.svg'
import Alert from '../Components/AlertComponent/Alert'

const SubmitFC = (props) => {
  const [category, setCategory] = useState(0);
  const [categoryFormData, setCategoryFormData] = useState({});
  const [activityTitle, setActivityTitle] = useState('');
  const [images, setImages] = useState([]);
  const [imgCaption, setImgCaption] = useState('');
  const [formView, setFormView] = useState(true);
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('info');

  const handleSubmit = (desc) => {
    setLoading(true);
    setAlertMessage('');
    setAlertSeverity('info');
    const heading = activityTitle
    const { date, eventBrochure } = categoryFormData
    const category_Id = category;
    const { uid: userId, displayName: userName } = props.user;
    let caption = imgCaption
    let brochureUrl = ''

    const uploadOnFirestore = async () => {
      const currentTime = new Date().getTime()
      const uploadObj = {
        created: new Date(currentTime).toLocaleString('en-IN', { dateStyle: "medium", timeStyle: "short", }),
        createdInSeconds: currentTime,
        author: userName,
        uid: userId,
        categoryId: category_Id,
        title: heading,
        desc: desc,
        eventDate: date ? date : '',
        imgUrl: arrayUnion(...imageLinks),
        brochureUrl: brochureUrl,
        imgCaption: caption ? caption : '',
        approved: false
      }

      try {
        await setDoc(doc(collection(db, 'submissions')), uploadObj)
        setCategory(0);
        setAlertMessage('Submitted successfully');
        setAlertSeverity('success');
        resetForm();
      } catch(err) {
        console.error(err);
        setAlertMessage(err.message);
        setAlertSeverity('error');
      } finally {
        setLoading(false);
      }
    }

    if (category_Id === 1) {
      caption = `MoU between ${categoryFormData.insName} and ${categoryFormData.partnerInsName}`
    } else if (category_Id === 3) {
      caption = `${categoryFormData.lectureType} by ${categoryFormData.speakerName}`
    }

    if (eventBrochure) {
      const uploadTask = storage.ref(`Brochure/${Categories[category_Id]}/${eventBrochure.name.split(/(\\|\/)/g).pop()}/`).put(eventBrochure);
      uploadTask.on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log(progress);
      },
        (error) => {
          console.log(error);
        },
        () => {
          storage.ref(`Brochure/${Categories[category_Id]}/`).child(`${eventBrochure.name.split(/(\\|\/)/g).pop()}`).getDownloadURL().then(url => {
            brochureUrl = url
            uploadOnFirestore();
          })

          resetForm();
        }
      )
    }

    // images
    let total_size = images.length;
    const imageLinks = [];
    for (let i = 0; i < total_size; i++) {
      const Image = images[i];
      const uploadTask = storage.ref(`Images/${Categories[category_Id]}/${Image.name.split(/(\\|\/)/g).pop()}/`).put(Image);

      uploadTask.on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log(progress);
      }, (error) => {
        console.log(error)
      }, () => {
        storage.ref(`Images/${Categories[category_Id]}/`).child(`${Image.name.split(/(\\|\/)/g).pop()}`).getDownloadURL().then(url => {

          imageLinks.push(url);
          if (i === total_size - 1) {
            uploadOnFirestore()
          }
        })
      })
    }
    if (total_size === 0) {
      uploadOnFirestore()
    }
  }

  const resetForm = () => {
    setCategoryFormData({activityTitle: activityTitle});
    setImages([]);
    setImgCaption('');
  }

  const addPerson = (person) => {
    const personType = person["type"].toLowerCase();
    setCategoryFormData((prevData) => ({ ...prevData, [personType]: prevData[personType] ? [...prevData[personType], person] : [person] }))
  }

  const removePerson = (index, personType) => {
    const personTypeSm = personType.toLowerCase();
    setCategoryFormData(prevData => ({ ...prevData, [personTypeSm]: prevData[personTypeSm] ? prevData[personTypeSm].filter((person, i) => i !== index) : [] }))
  }

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'activityTitle') {
      setActivityTitle(value);
      return;
    }
    if (name === 'eventBrochure') {
      setCategoryFormData((prevData) => ({ ...prevData, [name]: files[0] }))
      return;
    }
    setCategoryFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  useEffect(() => {
    setCategoryFormData((prevData) => ({ ...prevData, activityTitle: activityTitle }))
  }, [activityTitle])

  useEffect(() => {
    resetForm();
    // eslint-disable-next-line
  }, [category])

  return (
    <div className="add-blogs">
      <Alert message={alertMessage} severity={alertSeverity} />
      <div className="mobile-bg" />
      <div className="activity-form container">
        <div className="tablist-wrapper">
          <div id="tabList" className="tablist">
            <button
              onClick={(e) => { e.preventDefault(); setFormView(true); }}
              className={`tab ${formView ? "active" : ""}`}
              role="tab"
            >
              Form
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setFormView(false);
              }}
              className={`tab ${!formView ? "active" : ""}`}
              role="tab"
            >
              Preview
            </button>
          </div>

          <button
            onClick={(e) => {
              setFormView(!formView);
            }}
            className={`form-navigate${formView ? " next" : " prev"}`}
            title={`${formView ? "Next" : "Go back"}`}
          >
            {formView ? <NextIcon /> : <PrevIcon />}
          </button>
        </div>

        <div className="form-wrapper">
          <FormFC
            category={category}
            setCategory={setCategory}
            activityTitle={activityTitle}
            setActivityTitle={setActivityTitle}
            categoryFormData={categoryFormData}
            handleInputChange={handleInputChange}
            addPerson={addPerson}
            removePerson={removePerson}
            images={images}
            setImages={setImages}
            imgCaption={imgCaption}
            setImgCaption={setImgCaption}
            display={formView ? "block" : "none"}
          />
          <PreviewFC
            category={category}
            title={activityTitle}
            fields={categoryFormData}
            images={images}
            imgCaption={imgCaption}
            submit={handleSubmit}
            switchForm={() => { setFormView(true) }}
            display={formView ? "none" : "block"}
            loading={loading}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setFormView(!formView);
            }}
            className={`form-navigate${formView ? " next" : " prev"}`}
            title={`${formView ? "Next" : "Go back"}`}
          >
            {formView ? <NextIcon /> : <PrevIcon />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubmitFC;