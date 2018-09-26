import React from 'react';
import styles from "./../../css/home.scss";
import CSSModules from 'react-css-modules';

class Header extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <h1>
                <p styleName='home222'>Heello React</p> 
                <p styleName='title'>222</p>    
            </h1>
        )
    }
}

export default CSSModules(Header, styles);