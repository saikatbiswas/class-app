import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { userSignOut } from '../../../store/actions/user_actions'

class Header extends Component {

    state = {
        page:[
            {
                name:'Home',
                linkTo:'/',
                public:true,
            },
            {
                name:'Shop',
                linkTo:'/shop',
                public:true,
            },
            {
                name:'React',
                linkTo:'/rnd',
                public:true,
            }
        ],
        user:[
            {
                name:'My Cart',
                linkTo:'/admin/cart',
                public:false,
            },
            {
                name:'My Account',
                linkTo:'/admin/dashboard',
                public:false,
            },
            {
                name:'Log In',
                linkTo:'/register_login',
                public:true,
            },
            {
                name:'Log Out',
                linkTo:'/register',
                public:false,
            }
        ]
    }

    

    showLinks = (type) =>{
        let list = [];
        if(this.props.user.data){
            type.forEach((item)=>{
                if(!this.props.user.auth){
                    if(item.public){
                        list.push(item);
                    }
                }else{
                    if(item.name !== 'Log In'){
                        list.push(item);
                    }
                }
            })
        }

        return list.map((item, i) => {
            if(item.name !== 'My Cart'){
                return this.defaultLink(item, i)
            }else{
                return this.cartLink(item, i)
            }
            
            // <Link to={item.linkTo} key={i}>{item.name}</Link>
        })

        

    }
    defaultLink = (item, i)=>(
        item.name === 'Log Out'?
        <div 
            className="log_out_link" 
            key={i} 
            onClick={()=>this.logoutHandler()}
        >{item.name}</div>
        :<Link to={item.linkTo} key={i}>{item.name}</Link>
    )
    cartLink = (item, i)=>{
        const user = this.props.user.data;

        return(
            <div className="cart_link" key={item.linkTo+i}>
                <span>{user.cart ? user.cart.length : 0}</span>
                <Link to={item.linkTo}>{item.name}</Link>
            </div>
        )
    }

    logoutHandler =()=>{
        this.props.dispatch(userSignOut()).then(response=>{
            this.props.history.push('/');
        })
    }


    render() {

        return (
            <header className="bck_b_light">
                <div className="container">
                    <div className="left">
                        <div className="logo">Logo</div>
                    </div>
                    <div className="right">
                        <div className="top">
                            {this.showLinks(this.state.user)}
                        </div>
                        <div className="bottom">
                            {this.showLinks(this.state.page)}
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

function mapStateToProps(state){
    return{
        user:state.user
    }
}

export default connect(mapStateToProps)(withRouter(Header));