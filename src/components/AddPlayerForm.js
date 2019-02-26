import React, { Component } from 'react';

class AddPlayerForm extends Component {

    state = {
        value: ''
    }

    handleValueChange = (e) => {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <form>
                <input type="text" 
                placeholder="Enter a Player's Name" 
                value={this.state.value}
                onChange={this.handleValueChange}
                />
                <input type="submit" value="Add Player" />
            </form>

        );
    }
}

export default AddPlayerForm;