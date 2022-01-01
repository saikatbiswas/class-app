import React, { Component } from "react";
import { Link } from "react-router-dom";


const links = [
    {
        name:'My Account',
        linkTo:'admin/dashboard'
    },
    {
        name:'My Profile',
        linkTo:'admin/user_profile'
    },
    {
        name:'My Cart',
        linkTo:'admin/cart'
    },
]

class AdminLayout extends Component {

    

    generateLinks = (links)=>{
        return(
            links.map((item,i)=>(
                <Link to={item.linkTo} key={i}>
                    {item.name}
                </Link>
            ))
        )
    }

    


    render(){
        return(
            <div className="container">
                <div className="user_container">
                    <div className="user_left_nav">
                        <h2>My Account</h2>

                        <div className="links">
                            
                            {this.generateLinks(links)}
                            {/* {
                                links.map((item,i)=>(
                                    <Link to={item.linkTo} key={i}>
                                        {item.name}
                                    </Link>
                                ))
                            } */}
                        </div>
                    </div>
                    <div className="user_right">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}


export default AdminLayout;