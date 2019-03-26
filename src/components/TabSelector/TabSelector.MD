#### TabSelector 想到的东西.

>  需求: 使用react 做一个Tab 选项卡,选中一项则当前背景颜色改变，并获取对应的值.

 实现思路: 
 *  1、  定义好UI.
 *  2、  定义状态 state 变量: options 数组, value 对应选中的值. 状态为自己内部维护.
 *  3、  定义交互方式.(组件内自己维护.)

 代码展示:

    ```
    export default class TabSelector extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                options:[
                    {id:1,name:'one',value:'blue'},
                    {id:2,name:'two',value:'red'}
                ]
            };

            this.selectedItemHandler = this.selectedItemHandler.bind(this);
        }

        initColors() {
            // 将state 移除到组件外面.
            return this.state.options.map((key, index, item) => {
                return <li 
                        key={index}  
                        class={item[index].css} 
                        onClick={() => this.props.triggerSelectedItemHandler(item[index])}>
                    {item[index].name}
                </li>
            });
        }

        selectedItemHandler(currentItem) {
            this.state.options.map((key, index, item) => {
                currentItem.id === item[index].id ? item[index].css = 'tabWrapper-item-seleted' : item[index].css = 'tabWrapper-item';
            });

            this.setState({
                 colors: this.state.colors
            });
        }


        render() {
            return <Fragment>
                <nav>
                    <ul class="tabWrapper">
                        {
                            this.initColors()
                        }
                    </ul>
                </nav>
            </Fragment>
        }
    }

    ```

 > 第二版重构:

 问题:

 组件状态全部为内部状态, 方法也没有暴露给外面去调用，这个组件不通用.

 重构:

 1、将内部状态移除，转为通过外部属性传入.
 
 2、将选中的事件，转移给外部的组件.

 ```
 export default class TabSelector extends React.Component {
        constructor(props) {
            super(props);
        }

        initColors() {
            // 将state 移除到组件外面.
            return this.props.options.map((key, index, item) => {
                return <li 
                        key={index}  
                        class={item[index].css} 
                        onClick={() => this.props.triggerSelectedItemHandler(item[index])}>
                    {item[index].name}
                </li>
            });
        }

        render() {
            return <Fragment>
                <nav>
                    <ul class="tabWrapper">
                        {
                            this.initColors()
                        }
                    </ul>
                </nav>
            </Fragment>
        }
    }

 ```

 ``` 
   外部组件调用

   render(){
            <TabSelector data={this.state.colors} triggerSelectedItemHandler={this.selectedItemHandler}/>
    }


   selectedItemHandler(currentItem){
        console.log("currentItem",currentItem);
        this.state.colors.map((key,index,item)=>{
            item[index].id == currentItem.id ? item[index].css = 'tabWrapper-item-seleted' : item[index].css = 'tabWrapper-item';
        });

        this.setState({
            colors:this.state.colors
        })
   }
 ```

 
 > 第三步重构:

 问题:

 1、 外部组件应用，获取选中的值过于复杂。

 重构:

 1、定义好内外交互方式, 内部维护一个选中的状态, 当有tab 选中的时候, 将值传递给外层组件.


 代码:

 ```  
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
 ```


```
 组件的调用.

 class Header extends React.Component{

    constructor(){
        super();

        this.state = {
            options:[
                { name: "Red", value: "red" },
                { name: "Blue", value: "blue" },
                { name: "Orange", value: "orange" }
            ],
            color:null
        };
    }

    render(){
        return  <TabSelector 
                    options={this.state.options}
                    value={this.state.color}
                    onChange={c=>this.setState({color:c})}
                />
    }
}

```


> 总结: 

1、创建静态UI.

2、考虑组件的状态组成.(状态是来自外部，还是需要内部去维护.)

3、考虑组件的交互方式(内部用户进行的操作，如何暴露外面的人去维护.)

> 扩展场景: 

1、

2、

3、

4、




> 需要回答的问题:

1、 pureComponent Vs React.Component 区别? 多是什么场景下使用?

2、 setState 的原理是什么?

3、 react 事件机制? 为什么可以不要做类似于 js 那样做事件委托?

4、 React 16 版本的新特性有哪些?

5、 React 之间的值的传递有哪几种方式? 多是怎么做到的?

6、 React 生命周期有那几个函数?

7、 什么是受控组件什么是非受控组件?