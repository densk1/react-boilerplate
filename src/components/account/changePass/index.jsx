import React, {Component} from 'react';


class ChangePassword extends Component {

    render() {
        return(
            <form className="card card-body col-xs-12 offset-sm-1 col-sm-10 offset-md-1 col-md-10 mb-3">
                <div className="form-group row mb-0 pb-0">
                    <div className="col-12">
                        <h4 className="text-success text-center">Update Password</h4>
                    </div>
                </div>
                <div className="form-group row mb-0 pb-0">
                    <label className="col-sm-2 col-form-label text-muted mb-0 pb-0 pr-0"><small>User</small></label>
                    <div className="col-sm-10 pb-0 mb-0 ml-0 mt-0 pt-0">
                        <div>
                            <input type="text" name="firstName" value="cardenk@gmail.com" placeholder="" disabled="" readonly="" class="form-control custom-form-plaintext text-success p-xs-0 m-xs-0 ml-0 pl-0  "/>
                        </div>
                    </div>
                </div>
                <div className="form-group row mb-0 pb-0">
                    <label className="col-12 col-form-label text-muted mb-0 pb-0 "><small>Old Password</small></label>
                    <div className="col-12 pb-0 mb-0">
                        <div>
                            <input className="form-control" name="email " type="email" value=""/>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="form-group row mb-0 pb-0">
                    <label className="col-12 col-form-label text-muted mb-0 pb-0 "><small>New Password</small></label>
                    <div className="col-12 pb-0 mb-0">
                        <div>
                            <input className="form-control" name="email " type="email" value=""/>
                        </div>
                    </div>
                </div>
                <div className="form-group row mb-4 ">
                    <label className="col-12 col-form-label text-muted mb-0 pb-0 "><small>Repeat New Password</small></label>
                    <div className="col-12 pb-0 mb-0">
                        <div>
                            <input className="form-control" name="email " type="email" value=""/>
                        </div>
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-12 text-center">
                        <button className="form-control btn btn-success w-100" type="button" value="submit">Add</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default ChangePassword;