import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BrokenImage from './brokenImage'
import Image from './image'

class Poster extends Component {
  constructor (props) {
    super(props)

    this.state = { error: false }

    this.handleError = this.handleError.bind(this)
  }

  handleError () {
    this.setState({ error: true })
  }

  render () {
    const { url } = this.props
    const { error } = this.state

    return !error
      ? <Image url={url} onError={this.handleError} />
      : <BrokenImage />
  }
}

Poster.propTypes = {
  url: PropTypes.string.isRequired
}

export default Poster
