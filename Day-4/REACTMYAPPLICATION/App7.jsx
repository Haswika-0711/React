import React from "react"
class App7 extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
          title: 'React state example',
        };
      }
    
      tooggleTitle () {
    
        if (this.state.title === " ") {
    
          this.setState({ title: 'React state example' });
        } else {
    
          this.setState({ title: '' });
        }
      }
    
      render() {
        return (
          <div>
    
            <div>
              <input type="checkbox" id="showTitle" onClick={()=>this.tooggleTitle()} defaultChecked />
              <label htmlFor="showTitle">Show title</label>
            </div>
    
            <h2>{this.state.title}</h2>
    
          </div>
        );
      }
}

export default App7;