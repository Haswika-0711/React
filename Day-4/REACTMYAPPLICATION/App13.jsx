import React,{ Component } from "react";
import { BrowserRouter as Router, Switch,Route, Link } from "react-router-dom";
import './file.css'
import htmlContent from './Contact.html'
import './style.scss'
import {stockData} from './data.js'

const myconf = require('./myConfig.json5');

class App13 extends Component {
    constructor(props){
        super(props)
        console.log("myConfig",myconf.default.env)
    }
    render() {
      return (
      <Router>
          <div>
            <h2>Welcome to React Router Tutorial</h2>
            <nav>
                <ul>
                <li><Link className="link" to={'/'} > Home </Link></li>    
                <li><Link className="link" to={'/contact'} > Contact </Link></li>
                <li><Link className="link" to={'/about'} > About </Link></li>
                <li><Link className="link" to={'/signin'} > SignIn </Link></li>
                <li><Link className="link" to={'/signup'} > SignUp </Link></li>
                </ul>
            </nav>
            <hr />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/contact' component={Contact} />
                <Route path='/about' component={About} />
                <Route path='/signin' component={Signin} />
                <Route path='/signup' component={SignUP} />
            </Switch>
          </div>
        </Router>
      );
    }
  }
  


class Home extends Component {
        render() {
          return (
              <div>
                <h2>Home</h2>
              </div>
          );
        }
      }
    

    
    class About extends Component {
            render() {
              return (
                  <div>
                   {stockData.map((data,key)=>{
            return(
            <div key={key}>
                {data.company} +" "+{data.stockPrice}+" "+{data.stockPrice}

            </div>)
        })}
                  </div>
              );
            }
          }


        class Contact extends Component {
                render() {
                  return (
                      <div>
                        <div dangerouslySetInnerHTML={{__html:htmlContent}}></div>
                      </div>
                  );
                }
              }


        class Signin extends Component {
                    render() {
                      return (
                          <table border="5px">
                                <tr>
                                    <td>Enter name</td>
                                    <td><input type="text" id="name"/></td>
                                </tr>
                                <tr>
                                    <td>Enter Password</td>
                                    <td><input type="password" id="password"/></td>
                                </tr>
                                <tr>
                                    <td><button name="submit">Submit</button></td>
                                </tr>
                </table>
                      );
                    }
                  }



        class SignUP extends Component {
                        render() {
                          return (
                              <div>
                                <h2>signup</h2>
                              </div>
                          );
                        }
                      }
            
            



export default App13;