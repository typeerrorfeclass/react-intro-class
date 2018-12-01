import React from 'react'
import ReactDOM from 'react-dom'
import Select from './Select/index'

import './reactWay.less'

class ViewComponent extends React.Component {
  // 生命周期1
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return <div className='react-content-wrap'>
      <Select text='foobar' />
    </div>
  }
}

export default function reactWay (sel) {
  ReactDOM.render(<ViewComponent />, document.querySelector(sel))
}
