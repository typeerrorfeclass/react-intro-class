import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button/index'
import Input from './Input/index'

import './reactWay.less'

class Model {
  get n () {
    return this.n_
  }

  set n (val) {
    if (val === this.n) {
      return
    }

    this.n_ = val

    this.context.triggerChangeEvent({
      n: this.n
    })
  }

  constructor () {
    this.n_ = 0
  }

  setContext (ctx) {
    this.context = ctx
  }

  increment () {
    this.n += 1
  }

  decrement () {
    this.n -= 1
  }
}

class ViewComponent extends React.Component {
  // 生命周期1
  constructor (props) {
    super(props)

    this.model = props.model
    this.model.setContext(this)
    this.state = {
      n: 0
    }

    console.log(1, 'constructor')
    console.log(document.querySelector('.react-content-wrap'))
  }

  // 2
  componentWillMount () {
    console.log(2, 'componentWillMount')
    console.log(document.querySelector('.react-content-wrap'))
  }

  // 3
  componentDidMount () {
    console.log(4, 'componentDidMount')
    console.log(document.querySelector('.react-content-wrap'))

    document.querySelector('.react-content-text').innerHTML = 'React解决方案'
  }

  componentWillUnmount () {
    console.log('componentWillUnmount')
    console.log(document.querySelector('.react-content-wrap'))

    document.querySelector('.react-content-text').innerHTML = ''
  }

  // 这个过程现在已经没有了
  componentDidUnmount () {
    console.log('componentDidUnmount')
    console.log(document.querySelector('.react-content-wrap'))
  }

  /*
  shouldComponentUpdate () {
    return this.state.n % 2
  }
  */

  componentWillUpdate () {
    console.log('componentWillUpdate', this.state.n)
  }

  componentDidUpdate () {
    // console.log('componentDidUpdate', this.state.n)
    // document.querySelector('.react-content-text').innerHTML = this.state.n
  }

  onIncClick () {
    this.model.increment()
  }

  onDecClick () {
    this.model.decrement()
  }

  triggerChangeEvent () {
    this.setState({
      n: this.model.n
    })
  }

  render () {
    return <div className='react-content-wrap'>
      <p class='react-content-text' />
      <ButtonGroup
        onIncClick={this.onIncClick.bind(this)}
        onDecClick={this.onDecClick.bind(this)} />
      <InputGroup n={this.state.n} />
    </div>
  }
}

class ButtonGroup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return <div>
      <Button
        className='left-button'
        onClick={this.props.onIncClick}>
        +1
      </Button>
      <Button onClick={this.props.onDecClick}>-1</Button>
    </div>
  }
}

class InputGroup extends React.Component {
  render () {
    return <div>
      <Input value={this.props.n} />
      <Input value={this.props.n * 2} />
    </div>
  }
}

export default function reactWay (sel) {
  const model = new Model()
  ReactDOM.render(<ViewComponent model={model} />, document.querySelector(sel))
  // ReactDOM.unmountComponentAtNode(document.querySelector(sel))
}
