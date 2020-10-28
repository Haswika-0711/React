import React from 'react'
import axios from 'Axios'
class App12 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            records: []
        }
        this.search=this.search.bind(this)
    }
    
    componentDidMount(){
        const apiurl='https://api.github.com/users/hacktivist123/repos';
        // fetch(apiurl)
        // .then((response)=> response.json())
        // .then((data) => console.log("Records are",data))

    //     axios.get(apiurl).then((response)=>{
    //         //console.log(response.data)
    //         this.setState({
    //             records:response.data
    //         })
    //         console.log(this.state.records)
    //     })
    //     .catch(error=>{
    //         console.log("error")
    //     })
    // }

    const urlone=axios.get('http://jsonplaceholder.typicode.com/users/')
    const urlsecond=axios.get('https://api.github.com/users/hacktivist123/repos')
    const myurl=axios.get("http://localhost:4000/users")

    axios.all([urlone,urlsecond,myurl]).then(axios.spread((...responses)=>{
        // console.log("First",responses[0].data)
        // console.log("Second",responses[1].data)
        // console.log("myurl",responses[2].data)
        this.setState({
            records:responses[2].data})
      
        }))
    }
    search(){
        const q=document.getElementById("query").value;
        const reg=new RegExp('^q');
        this.state.records.map(valu =>{if(valu.startsWith(reg)) {<p>valu</p>} })
    }
    
    render(){
        return(
        // <ul>
        //     {this.state.records.map(rec=><li>{rec.first_name} {rec.last_name} {rec.email}</li>)}
        // </ul>
       
        <div>
            <input type="text" id="query" onChange={this.search}></input>
            
        </div>
        )
    }
}

export default App12;