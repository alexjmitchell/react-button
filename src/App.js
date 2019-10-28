import React, { Component } from "react"
import "./App.css"


class Form extends Component {
  state = {
    likes: 0,
    like_status: "Likes",
  }

  clickHandler = event => {
    this.setState({
      likes: this.state.likes + 1
    })

    if (this.state.likes === 0) {
      this.setState({
        like_status: "Like"
      })
    } else {
      this.setState({
        like_status: "Likes"
      })
    }
  }

  render() {
    return (
      <>
        <div className="container">
          <h1>Like Button</h1>
          <button onClick={this.clickHandler}>
            {this.state.likes} {this.state.like_status}
          </button>
        </div>
      </>
    )
  }
}

export default Form
