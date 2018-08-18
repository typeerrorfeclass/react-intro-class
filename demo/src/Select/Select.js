import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import './Select.less'

let currentId = 0

export default class Select extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      expending: false
    }
  }

  componentDidMount () {
    const div = this.dropWrap_ = document.createElement('div')

    div.className = 'type-error-drop-wrap'
    div.id = 'drop-wrap-' + currentId++
    document.body.appendChild(div)
  }

  componentWillUnmount () {
    document.body.removeChild(this.dropWrap_)
    delete this.dropWrap_
  }

  renderDrop () {
    try {
      const root = this.root_
      const style = {
        left: root.offsetLeft,
        top: root.offsetTop + root.offsetHeight,
        display: this.state.expending ? 'block' : 'none'
      }

      const drop = <div className='type-error-drop' style={style}>
        Hello Select.
    </div>

      return ReactDOM.createPortal(drop, this.dropWrap_)
    } catch (err) {
    }
  }

  onMainClick () {
    this.setState({
      expending: !this.state.expending
    })
  }

  render () {
    const { text } = this.props
    const { expending } = this.state
    const imgURL = expending ? 'assets/fold.svg' : 'assets/unfold.svg'

    return <div ref={c => { this.root_ = c }} className='type-error-select' onClick={this.onMainClick.bind(this)}>
      <div className='main-wrap'>
        <div className='left-text'>
          {text}
        </div>
        <div className='right-btn'>
          <img src={imgURL} />
        </div>
      </div>
      {this.renderDrop()}
    </div>
  }
}
