// import React, { Component } from 'react'

// export default class home extends Component {
//     constructor(){
//         super();
//         this.state={
//             name:"张三",
//             age:"30"
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <p>我是home组件</p>
//                 <p> {this.state.name} </p>
//                 <p> {this.state.age} </p>
//             </div>
//         )
//     }
// }

// import React, { Component } from 'react'
// import hert from '../assets/images/heart.png'

// export default class home extends Component{
//        constructor(props){
//            super(props)
//            this.state={
//                list:[
//                    {name:"111",age:18},
//                    {name:"222",age:18},
//                    {name:"333",age:18}
//                ],
//                hot:[<p key="1">1</p>,<p key="2">2</p>]
//            }
//        }

//        render() {
//         let list=this.state.list.map((value,key)=>{
//             return <li key={key}>{value.name}</li>
//          })
//           return(
//             <div className="homelist">
//             <ul>
//                 <li></li>
//             </ul>
//             <img src={hert} alt=""/>
//             <img src={require('../assets/images/hua.png')} alt=""/>
//             <img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4153912615,1986758458&fm=26&gp=0.jpg" alt=""/>
//            <ul> {list} </ul>
//            {this.state.hot}
//            </div>
//           )
//        }
// }


// import React,{ Component } from 'react'

// export default class home extends Component{
//          constructor(){
//              super()
//              this.state={
//                  msg:"我是组件",
//                  name:"李四"
//              }
//              this.getmsg2=this.getmsg2.bind(this)
//             //  this.changemsg=this.changemsg.bind(this)
//          }
        
//          getmsg1(){
//             alert(this.state.msg)
//          }
//          getmsg2(){
//             alert(this.state.msg)
//          }
//          getmsg3=()=>{
//             alert(this.state.msg)
//          }
//          changemsg=()=>{
//              this.setState({
//                msg:"我是改变后的组件"
//              })   
//          }
//          getname=(str)=>{
//              this.setState({
//                 name:str
//              })
//          }
//          getmsg=(str)=>{
//              this.setState({
//                 msg:str
//              })
//          }
//          render(){
//              return(
//                 <div>
//                     <p> {this.state.name} </p>
//                     <p> {this.state.msg} </p>
//                     <button onClick={this.getmsg1.bind(this)}>方法一</button>
//                     <button onClick={this.getmsg2}>方法二</button>
//                     <button onClick={this.getmsg3}>方法二</button>
//                     <button onClick={this.changemsg}> 改变msg</button>
//                     <button onClick={this.getname.bind(this,"张三")}> 改变name</button>
//                     <button onClick={this.getmsg.bind(this,this.state.name)}>改变msg</button>
//                 </div>
//              )
//          }
// }


// import React,{ Component } from 'react'

// export default class home extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             msg:""
//         }
//     }
//     run=(event)=>{
//        console.log(event)
//     //    alert(event.target)
//     event.target.style.background="red"
//     alert(event.target.getAttribute('a'))
//     }
//     render(){
//         return(
//             <div>
//             <h2>哈哈</h2>
//             <button a="123" onClick={this.run}>点击</button>
//             </div>
//         )
//     }
// }

import React,{ Component} from 'react'

export default class home extends Component{
    constructor(props){
        super(props)
        this.state={
          msg:"111"
        }
    }
    getinp=(event)=>{
         this.setState({
            msg:event.target.value
         })
         console.log(event.target.value)
         console.log(this.state.msg)
    }
    changemsg=()=>{
        alert(this.state.msg)
    }
    render(){
        return(
            <div>
                <input type="text" onChange={this.getinp} value={this.state.msg}/>
                <button onClick={this.changemsg}>点击</button>
               <h4>{this.state.msg}</h4>
            </div>
        )
    }
}