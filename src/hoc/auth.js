import React, {Component} from "react";
import { connect } from 'react-redux';
import { userIsAuth } from '../store/actions/user_actions';
// import CircularProgress from "@material-ui/core/CircularProgress";


export default function Auth(ComposedClass, reload, adminRoute = null){
    class AuthenticationCheck extends Component {

        state = {
            loading:true
        }

        componentDidMount(){
            this.props.dispatch(userIsAuth()).then(response => {
                
                let user =this.props.user;

                // console.log('is auth',user)
                if(!user.auth){
                    if(reload){
                        this.props.history.push('/register_login');
                    }
                }else{
                    if(adminRoute && !user.data.role === 'admin'){
                        this.props.history.push('/admin/dashboard');
                    }else{
                        if(reload === false){
                            this.props.history.push('/admin/dashboard');
                        }
                    }
                    
                }
                
                this.setState({loading:false})
            });
        }

        render(){

            if(this.state.loading){
                return(
                    <div className="main_loader">
                        Loader
                    </div>
                )
            }
            return(
                <ComposedClass {...this.props} user={this.props.user} />
            )
        }
    }

    function mapStateToProps(state){
        return{
            user: state.user
        }
    }
    
    return connect(mapStateToProps)(AuthenticationCheck);
}

