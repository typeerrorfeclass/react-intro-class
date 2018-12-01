import React from 'react'
import PropTypes from 'prop-types'

import './Button.less'

export default class Button extends React.Component {
  static get defaultProps () {
    return {
      text: '未命名',
      onClick: _ => _,
      style: {},
      customClassName: ''
    }
  }

  static get propTypes () {
    return {
      text: PropTypes.string,
      onClick: PropTypes.func,
      style: PropTypes.object,
      customClassName: PropTypes.className
    }
  }

  constructor (props) {
    super(props)
    this.state = {
      mouseDown: false
    }
  }

  onClick () {
    const { onClick } = this.props

    if (!onClick) {
      return
    }

    onClick()
  }

  onMouseDown () {
    this.setState({
      mouseDown: true
    })
  }

  onMouseUp () {
    this.setState({
      mouseDown: false
    })
  }

  render () {
    const { text, children,
      className: customClassName, style } = this.props
    const captionText = children || text
    const { mouseDown } = this.state

    const mouseDownCls = mouseDown ? 'type-error-class-mousedown' : ''

    const className = `type-error-button ${mouseDownCls} ${customClassName}`

    return <button
      className={className}
      style={style}
      onClick={this.onClick.bind(this)}
      onMouseDown={this.onMouseDown.bind(this)}
      onMouseUp={this.onMouseUp.bind(this)}>
      {captionText}
    </button>
  }
}
