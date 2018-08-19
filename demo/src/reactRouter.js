import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return <div>
      <Router>
        <div>
          <Switch>
            <Route path='/foo' component={_ => <div>Foo Page</div>} />
            <Route path='/bar' component={_ => <div>Bar Page</div>} />
            <Route path='/' component={_ => <div>Main Page</div>} />
          </Switch>
          <Link to='/foo'>转到Foo</Link>
          <Link to='/bar'>转到Bar</Link>
        </div>
      </Router>
    </div>
  }
}

export default function (sel) {
  ReactDOM.render(<App />, document.querySelector(sel))
}
