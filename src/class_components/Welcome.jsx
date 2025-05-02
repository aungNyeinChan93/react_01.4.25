import React from "react";

class Welcome extends React.Component {

    constructor() {
        super();
        this.state = {
            mess: 'this is welcome message',
        }
    }
    name = 'Welcome';

    changeMessage(mess) {
        this.setState({ mess }, () => {
            console.log(this.state.mess);
        });
    }

    render() {
        return (
            <div>
                <h1>This is Welcome Class Component {this.name} || {this.state.mess}</h1>
                <button onClick={() => this.changeMessage('aung')}>Change Message</button>
                <h4>{this.props.test}</h4>
            </div>
        )
    }

}

export default Welcome;