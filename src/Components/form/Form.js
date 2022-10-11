import React, { Component } from 'react'
import { CategoryForm } from './CategoryForm'
import { Categories } from '../../helpers'

export class Form extends Component {

  initialState = {
    category: 0,
    activityTitle: '',
    formData: {},
    images: [],
    imgCaption: ''
  }

  state = this.initialState

  handleChange = (event) => {
    const { name, value, files } = event.target
    let setVal = value

    const images = []
    if (name === "images") {
      if (files.length > 0) {
        for (let i = 0, n = files.length; i < n; i++) {
          images.push(files[i]);
        }
      }
      setVal = images
    }
    this.setState({
      [name]: setVal
    }, () => {
      if (name === "activityTitle") {
        this.props.getPreview({
          category: this.state.category,
          activityTitle: this.state.activityTitle,
          images: this.state.images,
          imgCaption: this.state.imgCaption
        })
      } else {
        this.props.getPreview({
          category: this.state.category,
          formData: this.state.formData,
          activityTitle: this.state.activityTitle,
          images: this.state.images,
          imgCaption: this.state.imgCaption
        });
      }
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.category !== prevState.category) {
      this.setState({
        images: []
      }, () => {
        this.props.getPreview({
          category: this.state.category,
          formData: this.state.formData,
          activityTitle: this.state.activityTitle,
          images: this.state.images
        })
      });
    }
  }

  fetchCategoryData = (categoryData) => {
    this.setState({
      formData: categoryData
    }, () => {
      this.props.getPreview({
        category: this.state.category,
        formData: this.state.formData,
        activityTitle: this.state.activityTitle,
        images: this.state.images
      });
    });
  }

  categoriesSelect = Categories.map((category, i) => {
    if (i === 0) {
      return <option key={i} value={i}>Select an activity category</option>
    } else {
      return <option key={i} value={i}>{category}</option>
    }
  })

  render() {
    return (
      <form id='activityForm' autoComplete="off" className='form-group' style={{ display: this.props.display }}>
        <div className='initial-form'>
          <input
            type="text"
            name="activityTitle"
            className='form-control form-title'
            placeholder="New activity title here..."
            onChange={this.handleChange}
            value={this.state.activityTitle}
          />

          <select
            type="number"
            name="category"
            className='category-select form-control'
            required
            onChange={this.handleChange}
            value={this.state.category}
          >
            {this.categoriesSelect}
          </select>
        </div>

        {parseInt(this.state.category) !== 0 && (
          <>
            <CategoryForm
              handleUpdate={this.fetchCategoryData}
              categoryId={parseInt(this.state.category)}
              key={parseInt(this.state.category)}
            />

            <p className='sub-label'>Upload images (optional)</p>
            <input
              key={`i${this.state.category}`}
              type="file"
              name="images"
              className='form-control'
              accept="image/png, image/webp, image/jpeg"
              multiple
              onChange={this.handleChange}
            />

            {this.state.images.length !== 0 && (
              <input type="text"
                className='form-control'
                name="imgCaption"
                value={this.state.insName}
                onChange={this.handleChange}
                placeholder="Image caption"
              />
            )}
          </>
        )}

      </form>
    )
  }
}
