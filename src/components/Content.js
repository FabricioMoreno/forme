import React from 'react';
import ReactDOM from 'react-dom';
import quotes from '../quotes.js';

function MotivationMessage(props){
    let message = props.message === ''? 'Not Found': props.message
    return(
        <div className='motivationMessage'>
            <p>{message}</p>
        </div>
    )
}

class BtnChangeMessage extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    
    getRandomQuotes(quotes){
        const lengthQuotes = quotes.length
        const randomNumber = Math.floor(Math.random() * lengthQuotes)
        const randomQuote = quotes[randomNumber]

        return randomQuote        
    }

    generateNewMotivationMessage(){
        const messageMotivation = this.getRandomQuotes(quotes).message
        return messageMotivation
    }

    handleClick(){
        const onChangeMessage = this.props.onChangeMessage

        onChangeMessage(this.generateNewMotivationMessage())
    }

    render(){
        return(
            <div className='BtnGetMotivation'>
                <button onClick= {this.handleClick}>A new Motivation</button>
            </div>
        )
    }
}

export default class Content extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            message: 'Good Day !!' 
        }
        this.handleChangeMessage = this.handleChangeMessage.bind(this)
    }

    handleChangeMessage(message){
        this.setState({message: message})
    }

    render(){
        const {message} = this.state
        return(
            <div className = 'content'>
                <MotivationMessage message = {message}/>
                <BtnChangeMessage onChangeMessage = {this.handleChangeMessage}/>
            </div>
        )
    }
}