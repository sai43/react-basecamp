import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
                <form noValidate autoComplete="off">
                  <TextField 
                    name="title" 
                    onChange={this.handleNameChange} 
                    value={this.state.title} 
                    id="standard-title"
                    label="Title"
                  />
                  <TextField 
                    name="description"
                    size="10X10" 
                    onChange={this.handleDescriptionChange} 
                    value={this.state.description}  
                    id="standard-description"
                    label="Description"
                   />
                  <Button onClick={this.handleSubmitClick} variant="contained" color="primary"> Submit</Button>
                </form>
            </div>
        );
    }
} 

export default Form;
