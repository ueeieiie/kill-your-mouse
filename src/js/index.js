import React from 'react';
import ReactDOM from 'react-dom';

import styles from '../styles/style.scss'

let ticking;

class UpdatingNumber extends React.Component {
  constructor(){
    super();
    this.state = {
        computer: 75,
        user: 0,
        finish: false,
        incUserBtn: true,
        startGameBtn: false
    }
  }
  
  startGame(){
      this.setState({
        incUserBtn: false,
        startGameBtn: true
      })
      ticking = setInterval(this.incComputer.bind(this), 850)
  }
  
  incComputer(){  
    if(this.state.computer > 99){
        this.setState({
            finish: true,
            computer: 0,
            user: 0,
            incUserBtn: true,
        })
    clearInterval(ticking)
    return 
    }

    this.setState({
      computer: this.state.computer+1
    })
  }
  
  incUser(){
    if(this.state.user > 99){
        this.setState({
            finish: true,
            computer: 0,
            user: 0,
            incUserBtn: true,
        })
    clearInterval(ticking)
    return        
  }

    this.setState({
      user: this.state.user+1
    })
  }
  
  render() {
    const {computer, user, finish} = this.state;
    
    return (
      <div>
        <h1>How to kill your mouse </h1>
        <cite>Sponsered by Mouses Companies {'{' + "Logitech, Microsoft" +'...}'}</cite>
        
        <h2 className='kick'> Who will get to 100 first! </h2>
        <p>Computer clicks: 
            <span className="numbers"> {computer} </span>
        </p>
        <p>Your clicks:
            <span className="numbers"> {user} </span>
        </p>
        
        <button onClick={this.incUser.bind(this)} disabled={this.state.incUserBtn} >increment</button>
        <button onClick={this.startGame.bind(this)} disabled={this.state.startGameBtn} >start game</button>
        
        <p className='winnerMsg' style={ finish ? {display: 'block'} : {display: 'none'} }> 
            The winners are the mouse companies!!!
        </p>
      </div>
    )
  }
}

ReactDOM.render(<UpdatingNumber />, document.querySelector('.app'));