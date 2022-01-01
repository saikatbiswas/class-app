import React, {Component} from "react";
import AdminLayout from "../../../hoc/AdminLayout";
import Mybutton from "../../../utils/button";


class UserDashboard extends Component {


    render(){
        return(
            <AdminLayout>
                <div>
                    <div className="user_nfo_panel">
                        <h2>User Information</h2>


                        <div>
                            <span>Name: {this.props.user.data.fullname}</span>
                            <span>Phone: {this.props.user.data.phone}</span>
                            <span>Email: {this.props.user.data.email}</span>
                        </div>

                        <Mybutton 
                            type="default"
                            title="Edit Account Info"
                            linkTo="admin/user_profile"
                        />
                    </div>

                    <div className="user_nfo_panel">
                        <h2>History purchases</h2>

                        <div className="user_product_block_wrapper">
                            History...
                        </div>
                    </div>

                </div>
            </AdminLayout>
        )
    }
}


export default UserDashboard;