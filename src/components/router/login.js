import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           username:"",
           pwd:"",
           flag:false
         };
    }
    chengename=(e)=>{
        this.setState({
            username:e.target.value
        })
    }
    changepwd=(e)=>{
        this.setState({
            pwd:e.target.value
        })
    }

    login=(e)=>{
        e.preventDefault();
        var username=this.state.username;
        var pwd=this.state.pwd;
        if(username==="admit"&&pwd==="123"){
            this.setState({
                flag:true
            })
        }else{
            alert("登录失败！")
        }
    }
    render() {
        if(this.state.flag){
            return <Redirect to="/" />
        }
        return (
            <div>
              <form onSubmit={this.login}>
              <br/>
                  <input type="text" value={this.state.username} onChange={this.chengename}/> <br/>
                  <input type="password" value={this.state.pwd}  onChange={this.changepwd}/>  <br/><br/>
                 <input type="submit" value="登录"/>
              </form>
            </div>
        );
    }
}

export default login;