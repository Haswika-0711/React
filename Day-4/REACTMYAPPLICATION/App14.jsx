import React, { Component } from 'react'
import { hashHistory,Router, Route, Link, IndexRoute} from 'react-router'

class App12 extends Component {
    render() {
      return (
        <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='address' component={Address}>
            <IndexRoute component={TwitterFeed} />
            <Route path='instagram' component={Instagram} />
          </Route>
          <Route path='/about(/:name)' component={About} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
      )
    }
  }

  const About = (props) => (
    <div>
      <h3>Welcome to the About Page</h3>
      <h2>{props.params.name}</h2>
    </div>
  )
  
  const Home = () => <h1>Hello from Home!</h1>
 
  const NotFound = () => (<h1>404.. This page is not found!</h1>)

  const Nav = () => (
    <div><div>
    <Link onlyActiveOnIndex  activeStyle={{color:'#53acff'}} to='/'>Home</Link>&nbsp;
    <Link activeStyle={{color:'#53acff'}} to='/address'>Address</Link>&nbsp;
    <Link activeStyle={{color:'#53acff'}} to='/about'>About</Link>&nbsp;
  </div>

    </div>
  )

  const Container = (props) => <div>
  <Nav />
  {props.children}
</div>

const Address = (props) => <div>
  <br />
  <Link onlyActiveOnIndex  activeStyle={{color:'#53acff'}} to='/address'>Twitter Feed</Link>&nbsp;
  <Link activeStyle={{color:'#53acff'}} to='/address/instagram'>Instagram Feed</Link>
  <h1>We are located at Hinjewadi.</h1>
  {props.children}
</div>


const Instagram = () => <h3>Instagram Feed</h3>
const TwitterFeed = () => <h3>Twitter Feed</h3>    

export default App12

