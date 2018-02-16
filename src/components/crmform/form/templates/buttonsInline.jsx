import React from 'react';


const buttonsInline = (props) => (

    <div className="form-group row">
        <div className="col-7 text-center mt-4">
            <button 
                className="btn btn-success w-100 " 
                type="submit" 
                disabled={props.saveDisabled}
            >
                Save
            </button>
        </div>
        <div className="col-5 text-center mt-4">
            <button 
                className="btn btn-outline-danger w-100 " 
                type="submit" 
                disabled={props.clearDisabled}
                onClick={props.onClick}
            >
                Clear
            </button>
        </div>
    </div>
)

export default buttonsInline;
