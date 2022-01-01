import React, { Component } from 'react';

import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

class Layout extends Component {
    render() {
        return (
            <div data-test="component-layout">
                <Header/>
                <div className="page_container" data-test="component-hoc">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}

export default Layout;