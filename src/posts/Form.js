import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
        }
        this.handleSubmitClick = this.handleSubmitClick.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    }

    handleSubmitClick(event) { 
        console.log(this.state);
        this.props.onFormSubmit(this.state);
        event.preventDefault();
    }

    handleNameChange(event) {
        this.setState({title: event.target.value});
    }
    handleDescriptionChange(event) {
        this.setState({description: event.target.value});
    }


    render() {
        return(
            <div>
                    Title: <input type="text" name="title" onChange={this.handleNameChange} value={this.state.title} />
                    Description: <input type="textarea" name="description" size="10X10" onChange={this.handleDescriptionChange} value={this.state.description}  />
                    <button onClick={this.handleSubmitClick}>Submit</button>
            </div>
        );
    }
} 

export default Form;
