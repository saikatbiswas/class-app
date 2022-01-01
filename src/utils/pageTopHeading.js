import React from 'react';

const PageTopHeading = (props) => {
    return (
        <div className='page_top'>
            <div className='container'>
                {props.title}
            </div>
        </div>
    );
};

export default PageTopHeading;