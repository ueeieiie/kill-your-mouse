import React from 'react';
import ReactDOM from 'react-dom';

console.log('connected');

class LightingCounter extends React.Component {
    constructor(){
        super();
        this.state = {
            names: ['udi', 'eliran'],
            strikes: 1
        };

        setInterval(this.timerTick, 1000)

    }

    timerTick(){
        console.log(this.state.names)
        // this.setState({
        //     strikes: this.state.strikes + 100
        // })
    }

    render(){
        return(
            <div>
                <h1>
                    Numbers of strikes : {this.state.strikes}
                </h1>
            </div>
        );
    }
}

class LightingCounterDisplay extends React.Component {
    render(){
        let divStyle = {
            width: 250,
            textAlign: 'center',
            backgroundColor: 'black',
            padding: 40,
            color: '#999',
            borderRadius: 10
        };
        
       

        return (
            <div style={divStyle}>
                <LightingCounter />
            </div>
        );
    }
}

ReactDOM.render(
    <LightingCounterDisplay />,
    document.querySelector('.app')
)

