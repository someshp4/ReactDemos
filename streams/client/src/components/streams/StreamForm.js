import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {

    renderError({error, touched}) {
        if(error && touched) {
            return (
                <div className="ui error message">
                    <span className="header">{error}</span>
                </div>
            );
        }
    }

    renderInput= ({ input, label, meta }) => {
        const className = `field ${(meta.error  && meta.touched )? 'error' : ''}`;
        return (
            //withhout destructuring 
           // <input onChange={formProps.input.onChange} value={formProps.input.value} />
           
           <div className={className} >
               <label>{label}</label>
               <input {...input} autoComplete="off"/>
               {this.renderError(meta)}
           </div>
        );
    }

    onSubmit = (formValues) => {    
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)} >
                <Field name="title" component={this.renderInput}  label="Enter Title" />
                <Field name="description" component={this.renderInput}  label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }

}

const validate = (formValues) => {
    const errors = {};
    if(!formValues.title) {
        errors.title = "Please enter title";
    }

    if(!formValues.description) {
        errors.description = "Please enter description";
    }
    return errors;
};


export default reduxForm({ form : 'streamForm', validate : validate})(StreamForm);