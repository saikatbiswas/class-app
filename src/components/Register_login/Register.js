import React,{ Component } from "react";
import FormField from "../../utils/Form/FormField";
import { update, generateData, isFormValid } from '../../utils/Form/formActions';
import { connect } from 'react-redux';
import { registerUser } from '../../store/actions/user_actions'


class Register extends Component{

    state = {
        formError: false,
        formSuccess: false,
        formData:{
            fullname:{
                element: 'input',
                value:'',
                config:{
                    name: 'fullname',
                    type:'text',
                    placeholder:'Enter your fullname'
                },
                validation:{
                    required: true,
                    message:'This field is require',
                },
                valid: false,
                touched:false,
                validationMessage:''
            },
            phone:{
                element: 'input',
                value:'',
                config:{
                    name: 'phone',
                    type:'tel',
                    placeholder:'Enter your phone'
                },
                validation:{
                    required: true,
                    phone:true,
                    message:'This field is require',
                    phoneErrorMessage:'Must be a phone number'
                },
                valid: false,
                touched:false,
                validationMessage:''
            },
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
            },
            confirmPassword:{
                element: 'input',
                value:'',
                config:{
                    name: 'confirm_password_input',
                    type:'password',
                    placeholder:'Confirm your password'
                },
                validation:{
                    required: true,
                    confirm:'password',
                    message:'Password is not same'
                },
                valid: false,
                touched:false,
                validationMessage:''
            }
        }
    }

    updateForm= (element)=> {
        const newFormData = update(element, this.state.formData, 'register');

        this.setState({
            formError: false,
            formData: newFormData
        });
    }
    submitForm = (event)=>{
        event.preventDefault();

        let dataToSubmit = generateData(this.state.formData, 'register');

        let formIsValid = isFormValid(this.state.formData, 'register');

        if(formIsValid){
            console.log(dataToSubmit)
            this.props.dispatch(registerUser(dataToSubmit))
            // this.props.dispatch(userLogin(dataToSubmit)).then(response =>{
            //     if(response.payload.auth){
            //         console.log(response.payload)
            //     }else{
            //         this.setState({
            //             formError:true
            //         })
            //     }
            // });
            

            // this.props.history.push('home')

        }else{
            this.setState({
                formError: true
            });
        }
        

    }

    

    render() {
        return(
            <div className="page_wrapper">
                <div className="container">
                    <div className="register_login_container">
                        <div className="left">
                            <form onSubmit={(event)=>this.submitForm(event)}>
                                <h2>Personal Information</h2>
                                <div className="form_block_two">
                                    <div className="block">
                                        <FormField 
                                            id={'fullname'}
                                            formdata={this.state.formData.fullname}
                                            change={(element)=>this.updateForm(element)}
                                        />
                                    </div>
                                    <div className="block">
                                        <FormField 
                                            id={'phone'}
                                            formdata={this.state.formData.phone}
                                            change={(element)=>this.updateForm(element)}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <FormField 
                                        id={'email'}
                                        formdata={this.state.formData.email}
                                        change={(element)=>this.updateForm(element)}
                                    />
                                </div>

                                <h2>Varify Password</h2>
                                <div className="form_block_two">
                                    <div className="block">
                                        <FormField 
                                            id={'password'}
                                            formdata={this.state.formData.password}
                                            change={(element)=>this.updateForm(element)}
                                        />
                                    </div>
                                    <div className="block">
                                        <FormField 
                                            id={'confirmPassword'}
                                            formdata={this.state.formData.confirmPassword}
                                            change={(element)=>this.updateForm(element)}
                                        />
                                    </div>
                                </div>

                                <div>
                                    {this.state.formError ?
                                        <div className="error_label">
                                            Something went wrong try again!
                                        </div>
                                    :null}
                                    <button onClick={(event)=>this.submitForm(event)}>Create Account</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect() (Register);