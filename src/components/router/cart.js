import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class cart extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[
               
            ],
            domain:'http://a.itying.com/'
         };
    }
    getlist=()=>{
        var api=this.state.domain+"api/productlist";
        axios.get(api).then((res)=>{
            // console.log(res.data.result)
            this.setState({
                list:res.data.result
            })
        }).catch((err)=>{
            console.log(err)
        })
    }
   componentDidMount(){
       this.getlist()
   }

    render() {
        return (
            <div className="cart"> 
                    {this.state.list.map((value,key)=>{
                        return (
                         <div key={key}>
                             {/* <Link to={`/cartdet?id=${value._id}`}>{value.title}</Link> */}
                          <h4 className="cart_title">{value.title}</h4>
                          <ul className="cart_center">
                          {value.list.map((v,key)=>{
                                 return (
                                     <li key={key} className="cart_item">
                                         <Link to={`/cartdet/${v._id}`}> 
                                         <div>
                                          <img src={`${this.state.domain}${v.img_url}`} alt=""/> 
                                          <p>{v.title}</p>
                                          <p className="cart_price">{v.price}元</p>
                                          </div>
                                         </Link>
                                     </li>
                                 )
                             })}
                          </ul>
                         </div>
                        )
                    })}
            </div>
        );
    }
}

export default cart;