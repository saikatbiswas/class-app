import React, { Component } from 'react';

import { connect } from 'react-redux';

import { withRouter } from 'react-router';

import FormField from '../../utils/Form/FormField'
import { update, generateData, isFormValid } from '../../utils/Form/formActions';
// import { userLogin } from '../../store/actions/user_actions'
import { getUserLogin } from "../../store/actions/user.actions";

class Login extends Component {


    constructor(props){
        super(props);
        this.state = {
            formError: false,
            formSuccess: '',
            formData:{
                email:{
                    element: 'input',
                    value:'',
                    config:{
                        name: 'email_input',
                        type:'email',
                        placeholder:'Enter your email'
                    },
                    validation:{
                        required: true,
                        email:true,
                        message:'This field is require',
                        emailErrorMessage:'Must be a valid email'
                    },
                    valid: false,
                    touched:false,
                    validationMessage:''
                },
                password:{
                    element: 'input',
                    value:'',
                    config:{
                        name: 'password_input',
                        type:'password',
                        placeholder:'Enter your password'
                    },
                    validation:{
                        required: true,
                        message:'This field is require'
                    },
                    valid: false,
                    touched:false,
                    validationMessage:''
                }
            }
        }
    }

    

    updateForm= (element)=> {
        const newFormData = update(element, this.state.formData, 'login');

        this.setState({
            formError: false,
            formData: newFormData
        });
    }

    submitForm = (event)=>{
        event.preventDefault();
        
        let dataToSubmit = generateData(this.state.formData, 'login');

        let formIsValid = isFormValid(this.state.formData, 'login');

        if(formIsValid){
            // console.log(dataTOSubmit)
            // this.props.dispatch(userLogin(dataToSubmit)).then(response =>{
            //     if(response.payload.auth){
            //         console.log(response.payload)
            //     }else{
            //         this.setState({
            //             formError:true
            //         })
            //     }
            // });
            this.props.getUserLogin(dataToSubmit);
            
            // this.props.history.push('admin/dashboard');
            // Promise.resolve(this.props.getUserLogin(dataToSubmit)).then(res=>{
            //     console.log(res)
            //     this.props.history.push('admin/dashboard');
            // });
            // .then(response => {
            //     console.log(response);
            //     this.props.history.push('admin/dashboard');
            // })
            // this.props.dispatch(userLogin(dataToSubmit)).then(response =>{
            //     console.log(response)
            //     this.props.history.push('admin/dashboard')
            //     // if(response.payload.auth){
            //     //     console.log(response.payload);
            //     //     this.props.history.push('/user/dashboard')
            //     // }else{
            //     //     this.setState({
            //     //         formError: true
            //     //     })
            //     // }
            // });

            

        }else{
            this.setState({
                formError: true
            });
        }
        

    }

    


    render() {
        if(this.props.user.auth){
            this.props.history.push('admin/dashboard');
        }

        return (
            
            <div className="signin_wrapper" data-test="signup-wrapper-component">
                <form onSubmit={(event)=>this.submitForm(event)} autoComplete="off">
                    <FormField 
                        id={'email'}
                        formdata={this.state.formData.email}
                        change={(element)=>this.updateForm(element)}
                    />

                    <FormField 
                        id={'password'}
                        formdata={this.state.formData.password}
                        change={(element)=>this.updateForm(element)}
                    />
                    {this.state.formError ?
                        <div className="error_label">
                            Please check your credential!
                        </div>
                    :null}

                    <button onClick={(event)=>this.submitForm(event)} data-test="login-submit-component">Login</button>
                </form>
            </div>
        );
    }
}

export default connect(({user}) => ({user}), {
    // this is map dispatch to props
    getUserLogin
  })(withRouter(Login));