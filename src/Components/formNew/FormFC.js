import SchemaForm from '../formNew/SchemaForm'
import { Categories } from '../../helpers'

const FormFC = ({
    category, setCategory,
    activityTitle, setActivityTitle,
    categoryFormData, handleInputChange, addPerson, removePerson,
    images, setImages,
    imgCaption, setImgCaption,
    display
}) => {
    const handleFileInput = (event) => {
        const { files } = event.target;
        if (files) {
            const images = [];
            Array.from(files).forEach(file => {
                images.push(file);
            });
            setImages(images);
        }
    }

    const categoriesSelect = Categories.map((category, i) => {
        if (i === 0) {
            return <option key={i} value={i}>Select an activity category</option>
        } else {
            return <option key={i} value={i}>{category}</option>
        }
    })

    return (
        <form
            id="activityForm"
            autoComplete="off"
            className="form-group"
            style={{ display: display }}
        >
            <div className="initial-form">
                <input
                    type="text"
                    name="activityTitle"
                    className="form-control form-title"
                    placeholder="New activity title here..."
                    onChange={(e) => { setActivityTitle(e.target.value) }}
                    value={activityTitle}
                />

                <select
                    type="number"
                    name="category"
                    className="category-select form-control"
                    required
                    onChange={(e) => { setCategory(e.target.value) }}
                    value={category}
                >
                    {categoriesSelect}
                </select>
            </div>

            {parseInt(category) !== 0 && (<>
                <SchemaForm
                    currentCategory={category}
                    formData={categoryFormData}
                    handleInputChange={handleInputChange}
                    addPerson={addPerson}
                    removePerson={removePerson}
                    onSubmit={() => { console.log('todo schemaform submit') }}
                />

                <p className="sub-label">Upload images (optional)</p>
                <input
                    key={`i${category}`}
                    type="file"
                    name="images"
                    className="form-control"
                    accept="image/png, image/webp, image/jpeg"
                    multiple
                    onChange={handleFileInput}
                />

                {images.length !== 0 && (
                    <input
                        type="text"
                        className="form-control"
                        name="imgCaption"
                        value={imgCaption}
                        onChange={(e) => { setImgCaption(e.target.value) }}
                        placeholder="Image caption"
                    />
                )}
            </>)}
        </form>
    );
}

export default FormFC;