import React from 'react';
import TabSelector from './../TabSelector/TabSelector.js';

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

        // this.state = {
        //     colors: [
        //         { id: 1, name: 'red', css: 'tabWrapper-item-seleted' },
        //         { id: 2, name: 'blue', css: 'tabWrapper-item' },
        //         { id: 3, name: 'orange', css: 'tabWrapper-item' }
        //     ]
        // };

        // this.selectedItemHandler = this.selectedItemHandler.bind(this);
    }

    // selectedItemHandler(currentItem){
    //     console.log("currentItem",currentItem);
    //     this.state.colors.map((key,index,item)=>{
    //         item[index].id == currentItem.id ? item[index].css = 'tabWrapper-item-seleted' : item[index].css = 'tabWrapper-item';
    //     });

    //     this.setState({
    //         colors:this.state.colors
    //     })
    // }

    render(){
        return  <TabSelector 
                    options={this.state.options}
                    value={this.state.color}
                    onChange={c=>this.setState({color:c})}
                />

            // <TabSelector data={this.state.colors} triggerSelectedItemHandler={this.selectedItemHandler}/>
        
    }
}

export default Header;