import React, { Component } from 'react';
// import FetchJsonp from 'fetch-json'
import axios from 'axios'

class fetch extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[]
         };
    }
    getDate=()=>{
        // var api='../../public/fetch.json'
    //   FetchJsonp('../../public/fetch.json').then((response)=>{
    //      return response.json()
    //   }).then((json)=>{
    //     console.log(json)
    //   }).catch((ex)=>{
    //       console.log(ex)
    //   })
    axios.get('./fetch.json').then((res)=>{
        console.log(res.data.massage)
        this.setState({
            list:res.data.massage
        })
    }).catch((error)=>{
        console.log(error)
    })
    }
   componentDidMount(){
       this.getDate()
   }
    render() {
        return (
           <div>
             <h2>调用数据</h2>
              <button onClick={this.getDate}>获取数据</button>
              <ul>
                  {this.state.list.map((value,key)=>{
                       return <li key={key}>
                           {value.name}----{value.age}
                       </li>
                  })}
              </ul>
           </div>
        );
    }
}

export default fetch;