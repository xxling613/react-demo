import React, { Component } from 'react'

export default class check extends Component {
    constructor(props){
       super(props)
       this.state={
           msg:"111",
           sex:"1",
           city:"北京",
           citys:["北京","上海","深圳"],
           hobbys:[
               {"title":"吃饭","checked":true},
               {"title":"睡觉","checked":false},
               {"title":"看电视","checked":false}
           ],
           hobby:"",
           text:"请添加建议(10字以内)"
       }
    }
    getname=(e)=>{
        this.setState({
            msg:e.target.value
        })
        e.target.checked=true
    }
    submit=(e)=>{
        e.preventDefault();
        // this.state.hobbys.map((value,key)=>{
        //     if(value[key].checked===true){
        //       return value[key].title
        //     }
        // })
        console.log(this.state.msg,this.state.sex,this.state.city,this.state.hobbys,this.state.text)
    }

    changesex=(e)=>{
        this.setState({
            sex:e.target.value
        })
        // console.log(e.target.value)
    }
    city=(e)=>{
        this.setState({
            city:e.target.value
        })
    //   console.log(e.target.value)
    }
    hobby=(key)=>{
        var hobby=this.state.hobbys;
        hobby[key].checked=!hobby[key].checked
        this.setState({
            hobbys:hobby
        })
    }
    text=(e)=>{
        this.setState({
            text:e.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submit}>
                用户名:<input type="text" placeholder="请输入用户名" value={this.state.msg}  onChange={this.getname}/><br/>
                性别: <input type="radio" value="1" checked={this.state.sex==="1"} onChange={this.changesex}/> 男
                      <input type="radio" value="2" checked={this.state.sex==="2"}  onChange={this.changesex}/> 女
                      <br/>
                城市:
                   <select  onChange={this.city}>
                    {this.state.citys.map((value,key)=>{
                     return <option key={key}>{value}</option>
                    })}
                   </select> 
                   <br/>
                爱好：
                 {this.state.hobbys.map((value,key)=>{
                     return  (
                         <div key={key}>
                             <input type="checkbox" value={value.checked} checked={value.checked} onChange={this.hobby.bind(this,key)} /> 
                             {value.title}
                         </div>
                     )
                 })}   
                 建议： <br/>
                 <textarea maxLength="10" value={this.state.text} onChange={this.text}></textarea>
                <input type="submit" defaultValue="提交"/>
                </form>
            </div>
        )
    }
}
