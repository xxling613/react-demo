import React, { Component } from 'react';

class center extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentDidMount(){
        console.log(this.props)
    }
    render() {
        return (
            <div>
                <p>新闻详情</p>
            </div>
        );
    }
}

export default center;