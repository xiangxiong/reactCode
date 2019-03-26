import React,{PureComponent,Fragment} from "react";
import './TabSelector.scss';

/*  练习:
1、状态在内部管理.  √ 

2、把状态提取出去，让使用者把值传入进来. √
   
第三次重构:
1、
return  options.map(opt=>(
    <li
        key={opt.value}
        class={`tabWrapper-item${
            opt.value === value 
            ? "-selected" : ""
        }`}
        onClick={()=>onChange(opt.value)}
        >
        {opt.name}
    </li>
))

3、这个组件还可以扩展哪些场景?
*/

/**  补充的知识
 * 1、pureComponent Vs React.Component 区别? 多是什么场景下使用?
 * 2、setState 的原理是什么?
 * 3、react 事件机制? 为什么可以不要想js 那样做事件委托?
 * 4、React 16 版本的新特性有哪些?
 * 5、React 之间的值的传递有哪几种方式? 多是怎么做到的?
 * 父子之间传值: https://www.youtube.com/watch?v=5Xew--ycx0o.
 * 6、React 生命周期有那几个函数?
 * 7、什么是受控组件什么是非受控组件?
 *  */



export default class TabSelector extends PureComponent{
    constructor(props){
        super(props)
    }

    componentWillMount(){
    }

    initColors(){
        const { options,value,onChange } = this.props;

        return options.map((opt)=>{
            return <li 
                key={opt.value}
                class={`tabWrapper-item${
                    opt.value === value ? "-selected" : ""
                }`}
                onClick = {()=>onChange(opt.value)}>
                {opt.name}
            </li>
        });
    }

    render(){
        return <Fragment>
            <ul class="tabWrapper">
                {
                    this.initColors()
                }
            </ul>
        </Fragment>
    }
}



