import React from 'react';
import ReactDOM from 'react-dom';

export default class Header extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <header>
                <div className='title'>
                    <h1>Motivation for me</h1>
                </div>
            </header>
        )
    }
}