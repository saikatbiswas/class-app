import React from 'react';
import PropTypes from 'prop-types';


const FormField = ({formdata, change, id})=> {

    const showError = () => {
        let errorMessage = null;

        if(formdata.validation && !formdata.valid){
            errorMessage = (
                <div className="error_label" data-test="error_label_component">
                    {formdata.validationMessage}
                </div>
            )
        }

        return errorMessage;
    }

    // console.log(formdata, change, id)

    const renderTemplate = () => {
        let formTemplate = null;

        switch(formdata.element){
            case('input'):
                formTemplate = (
                    <div className="formBlock">
                        <input
                            className='input-box'
                            data-test="input-component"
                            {...formdata.config}
                            value={formdata.value}
                            onBlur={(event)=>change({event, id, blur:true})}
                            onChange={(event)=>change({event, id})}
                        />
                        {showError()}
                    </div>
                )
            break;
            default:
                formTemplate = null;
        }

        return formTemplate;
    }

    return (
        <div data-test="formBlock-wrap-component">
            {renderTemplate()}
        </div>
    );
}

FormField.propTypes = {
    formdata:PropTypes.object.isRequired,
    change:PropTypes.func.isRequired,
    id:PropTypes.string.isRequired
}

export default FormField;