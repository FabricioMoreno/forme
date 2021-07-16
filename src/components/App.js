import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js'
import Content from './Content.js'
import './styles/main.css'
import './styles/header.css'
import './styles/content.css'

export default function App(){
    return (
        <div className='main'>
            <Header/>
            <Content/>
        </div>
    )
}