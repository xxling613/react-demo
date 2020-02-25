import React, { Component } from 'react'

export default class footer extends Component {
    constructor(props){
        super(props);
        this.state={
            msg:"我是footer"
        }
    }
    run=()=>{
        alert("我是底部组件的run方法")
    }
    render() {
        return (
            <div>
                <p>底部组件</p>
            </div>
        )
    }
}
