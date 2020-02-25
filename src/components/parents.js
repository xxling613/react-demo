import React, { Component } from 'react'
import Child from './children.js'
import Footer from './footer.js'

export default class parents extends Component {
    constructor(props){
        super(props)
        this.state={
            msg:"父组件",
            name:"张三"
        }
    }

    run=()=>{
        alert(this.state.msg)
    }
    getchild=(res)=>{
        alert(res);
        this.setState({
            msg:res
        })
    }
    getfooter=()=>{
        // alert(this.refs.footer.state.msg)
        this.refs.footer.run()
    }
    render() {
        return (
            <div>
               <p>{this.state.msg}</p>
               <hr/>
               <Child run={this.run} name={this.state.name} parent={this} ref="child" title={this.props.title}/>
               <hr/>
               <button onClick={this.getfooter}>获取底部</button>
              <Footer ref="footer"></Footer>
              {/* <p>{this.refs.footer.state.msg}</p> */}
            </div>
        )
    }
}
