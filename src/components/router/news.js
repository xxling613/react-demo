import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class news extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[
                {"id":1,"title":"新闻1"},
                {"id":2,"title":"新闻2"},
                {"id":3,"title":"新闻3"},
                {"id":4,"title":"新闻4"}
            ]
         };
    }
    

    render() {
        return (
            <div> 
                <p>新闻</p>
            <div>
               <ul>
                 {this.state.list.map((value,key)=>{
                   return (
                       <li key={key}><Link to={`/center/${value.id}`}>{value.title}</Link></li>
                   )
                 })}
               </ul>
            </div>
            </div>
        );
    }
}

export default news;