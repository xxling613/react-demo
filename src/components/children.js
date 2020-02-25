import React, { Component} from 'react'

export default class children extends Component {
    constructor(props){
        super(props);
        this.state={
            msg:"子组件",
            title:"我是子组件传过来的"
        }
    }
    render() {
        return (
            <div>
              {/* <p>{this.state.msg}</p> */}
              <p>{this.props.name}</p>
             <button onClick={this.props.run}>
                  点击执行父组件方法
              </button>
              <button onClick={this.props.parent.getchild.bind(this,"李四")}>点击</button>
              
            </div>
        )
    }
}
children.defaultProps={
    name:"王五"
}