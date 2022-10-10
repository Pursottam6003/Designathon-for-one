import React, { Component } from "react"

export class Draft extends Component {
  initialState = {
    title: '',
    vol: '',
    iss: '',
    month: '',
    year: ''
  }

  state = this.initialState

  render() {
    return (
      <div className="draft">
        <div className="container">
          <header className="page-header">
            <h1 className="heading">Draft an Issue</h1>
          </header>

          <main className="workspace">
            <form className="draft-form">
              
            </form>
          </main>
        </div>
      </div>
    )
  }
}