import React, { Component } from 'react'
import storage from './storage.js'

export default class tolist extends Component {
    constructor(prps){
        super(prps);
        this.state={
            text:"",
            list:[]
        }
    }
//    获取input值并添加到数组list里
    text=(e)=>{
        // console.log(e.keyCode)
        if(e.keyCode===13){
            var tolist=this.state.list;
            tolist.push({"checked":false,"title":e.target.value})
            e.target.value=""
           this.setState({
            list:tolist
           })
        }
        storage.set("list",tolist)
    }
    // 点击按钮改变checked值
    change=(key)=>{
      var tolist=this.state.list;
      tolist[key].checked=!tolist[key].checked;
      this.setState({
          list:tolist
      })
      storage.set("list",tolist)
    }
//    删除
   del=(key)=>{
       var tolist=this.state.list;
       tolist.splice(key,1)
       this.setState({
        list:tolist
    })
    storage.set("list",tolist)
   }

   componentDidMount(){
    var tolist=storage.get("list")
    if(tolist){
      this.setState({
          list:tolist
      })
    }
   }

    render() {
        return (
            <div>
                <input type="text" onKeyUp={this.text} /> <br/>
                未完成：
                {this.state.list.map((value,key)=>{
                   if(!value.checked){
                    return (
                        <div key={key}>
                            <input type="checkbox" checked={value.checked} onChange={this.change.bind(this,key)} /> {value.title}
                            --- <input type="button" value="删除"  onClick={this.del.bind(this,key)} />
                        </div>
                    )
                   }
                   return true
                })
                }
                <br/>
                <br/>
                <br/>
                已完成：
                {this.state.list.map((value,key)=>{
                   if(value.checked){
                        return (
                        <div key={key}>
                            <input type="checkbox" checked={value.checked} onChange={this.change.bind(this,key)} /> {value.title}
                            --- <input type="button" value="删除"  onClick={this.del.bind(this,key)}/>
                        </div>
                    )
                   }
                   return true
                })}
            </div>
        )
    }
}
