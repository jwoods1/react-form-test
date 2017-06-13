import React, { Component, PropTypes } from 'react';
import InputField from '../Components/InputField';
import Form from '../Components/Form';
import Button from '../Components/Button';
class AuthorPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.inputlistener = this.inputlistener.bind(this);
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }
    inputlistener(event){
        let name = event.target.name;
        let newState = this.state;
        newState[name] = event.target.value; 
        this.setState(newState)
        console.log(this.state);
    }
    submitForm(event){
        alert('A name was submitted:');
        event.preventDefault();
    }
    render() {
        return (
            <Form name="TestForm" next={this.submitform}>
            <InputField column="col-md-3 " 
            name="TestField1" change={this.inputlistener} 
            inputClass="testCalss"
            label="Test Input" required="required" />
             <InputField column="col-md-3 " 
            name="TestField2" change={this.inputlistener} 
            inputClass="testCalss"
            label="Test Input" required="required" />
             <InputField column="col-md-3 " 
            name="TestField3" change={this.inputlistener} 
            inputClass="testCalss"
            label="Test Input" required="required" />
            <Button title="Next" />
            </Form>
        );
    }
}

AuthorPage.propTypes = {

};

export default AuthorPage;