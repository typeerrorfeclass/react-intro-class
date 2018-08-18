import React from 'react'
import ReactDOM from 'react-dom'

class HashRouterComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hash: window.location.hash.replace(/^#/, '') || 'foo'
    }

    this.onHashChange = this.onHashChange.bind(this)
    window.addEventListener('hashchange', this.onHashChange)
  }

  componentWillUnmount () {
    window.removeEventListener('hashchange', this.onHashChange)
    delete this.onHashChange
  }

  onHashChange () {
    this.setState({
      hash: window.location.hash.replace(/^#/, '')
    })
  }

  switchPage () {
    if (window.location.hash === '#foo') {
      window.location.hash = 'bar'
    } else {
      window.location.hash = 'foo'
    }
  }

  renderPage () {
    const { hash } = this.state
    let pageContent = null
    const style = {
      width: 600,
      height: 400,
      border: 'solid red 1px'
    }

    if (hash === 'foo') {
      pageContent = <div>Foo Page</div>
    } else if (hash === 'bar') {
      pageContent = <div>Bar Page</div>
    } else {
      pageContent = <div>Other Page</div>
    }

    return <div style={style}>
      {pageContent}
      <button onClick={this.switchPage.bind(this)}>切换页面</button>
    </div>
  }

  render () {
    return <div>
      {this.renderPage()}
    </div>
  }
}

export default function (sel) {
  ReactDOM.render(<HashRouterComponent />, document.querySelector(sel))
}
