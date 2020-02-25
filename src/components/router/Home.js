import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           
         };
    }
    render() {
        return (
            <div>
            <header className="title">
                <Link to="/">首页</Link>
                <Link to="/news">新闻</Link>
                <Link to="/cart">商品</Link>
            </header>
              <Link to="/login">登录</Link>
            </div>
        );
    }
}

export default Home;