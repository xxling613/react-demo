import React, { Component } from 'react';
// import url from 'url';
import axios from 'axios';
import {Link} from 'react-router-dom';

class cartdet extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            domain:'http://a.itying.com/',
            list:[]
         };
    }
    componentDidMount(){
        // var id=url.parse(this.props.location.search,true).query
        // console.log(id)
        // console.log(this.props.match.params.id)
        var id=this.props.match.params.id;
        this.getlist(id)
    }
   getlist=(id)=>{
       var api=this.state.domain+"api/productcontent?id="+id;
       axios.get(api).then((res)=>{
        // console.log(res.data.result[0])
        this.setState({
            list:res.data.result[0]
        })
    }).catch((err)=>{
        console.log(err)
    })
   }
    render() {
        return (
            <div className="cartdet">
                <Link to="/cart">
                <div className="cart_back"> >返回</div>
                </Link>
                    
                    {this.state.list.img_url?<img src={`${this.state.domain}${this.state.list.img_url}`} alt=""/>:""}
                    <h4>{this.state.list.title}</h4>
                   <div  dangerouslySetInnerHTML = {{ __html: this.state.list.content }} ></div>
            </div>
        );
    }
}

export default cartdet;