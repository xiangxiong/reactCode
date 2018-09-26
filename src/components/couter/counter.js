import React from 'react';
import SubCounter from './subcounter';

class Counter extends React.Component{

    // var defaultProps = {
    //     // 1、加载默认属性.
    //     name:'sls',
    //     age:23
    // };

    constructor(){
        super();
        // 2、加载默认状态
        this.state = {number:0};
        console.log('2、加载默认状态');
    }

    componentWillMount(){
        console.log('3、父组件挂载之前');
    }

    componentDidMount(){
        console.log('5、父组件挂载完成.');

        // 此时页面中有了真正的DOM的元素，可以进行DOM相关的操作
    }

    shouldComponentUpdate(newProps,newState){
        console.log('6、父组件是否需要更新');
        if(newState.number<12) return true;
        return false
        // 所以我们开发者可以根据项目的业务逻辑，在shouldComponentUpdate()中加入条件判断，从而优化性能
    }

    componentWillUpdate(){
        console.log('7、父组件将要更新');
    }

    componentDidUpdate(){
        console.log('8、父组件将要更新完成')
    }

    handleClick(){
        this.setState({
            number: this.state.number + 1
        })
    };

    render(){
        console.log('4、render(父组件挂载)');
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={this.handleClick.bind(this)}>+</button>
                {this.state.number<10?<SubCounter number={this.state.number}/>:null}
            </div>
        )
    }
}

export default Counter;