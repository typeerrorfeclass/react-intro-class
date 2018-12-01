import React from 'react'

export default class Input extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 0
    }
  }

  // onChange (event) {
  //   const t = this.input_.value

  //   console.log(t)
  //   if (t && t.length > 10) {
  //     return
  //   }

  //   this.setState({
  //     value: t
  //   })
  // }

  render () {
    // const { value: defaultValue } = this.props
    // const { value } = this.state
    // return <input
    //   ref={c => { this.input_ = c }}
    //   type='text'
    //   defaultValue={defaultValue}
    //   value={value}
    //   onChange={this.onChange.bind(this)} />

    return <input type='text' value={this.props.value} />
  }
}
