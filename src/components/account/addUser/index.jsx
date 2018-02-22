import React, {Component} from 'react';


class AddUser extends Component {

    render() {
        return(
            <form className="card card-body col-xs-12 offset-sm-1 col-sm-10 offset-md-1 col-md-10 mb-3">
                
                <div className="form-group row mb-0 pb-0">
                    <div className="col-12">
                        <h4 className="text-success text-center">Add User</h4>
                    </div>
                </div>
                <div className="form-group row mb-0 pb-0">
                    <div className="col-12 col-sm-6 mb-sm-0 mb-0">
                        <div className="form-group row m-0 p-0">
                            <label className="col-12 col-form-label text-muted mb-0 pb-0 pl-0"><small>First Name</small></label>
                            <div className="col-12 p-0 m-0">
                                <div>
                                    <input className="form-control" name="firstName" type="text" value=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 mb-sm-0 mb-0">
                        <div className="form-group row m-0 p-0">
                            <label className="col-12 col-form-label text-muted mb-0 pb-0 pl-0"><small>Last Name</small></label>
                            <div className="col-12 p-0 m-0">
                                <input className="form-control" name="lastName" type="text" value=""/>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                
                <div className="form-group row mb-0 pb-0">
                    <label className="col-12 col-form-label text-muted mb-0 pb-0 "><small>Email</small></label>
                    <div className="col-12 pb-0 mb-0">
                        <div>
                            <input className="form-control" name="email " type="email" value=""/>
                        </div>
                    </div>
                </div>

                
                

                <div className="form-group row">
                    <div className="col-12 col-sm-6 mb-sm-2 mb-1">
                        <div className="form-group row m-0 p-0">
                            <label className="col-12 col-form-label text-muted mb-0 pb-0 pl-0"><small>Password</small></label>
                            <div className="col-12 p-0 m-0">
                                <div>
                                    <input className="form-control" name="firstName" type="password" value=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 mb-sm-2 mb-2">
                        <div className="form-group row m-0 p-0">
                            <label className="col-12 col-form-label text-muted mb-0 pb-0 pl-0"><small>Check Password</small></label>
                            <div className="col-12 p-0 m-0">
                                <input className="form-control" name="lastName" type="password" value=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-7 col-sm-6 text-center">
                        <button className="btn btn-success w-100" type="button" value="submit">Add</button>
                    </div>
                    <div className="col-5 col-sm-6 text-center">
                        <button className="btn btn-outline-secondary w-100" type="button" value="submit">Clear</button>

                    </div>
                </div>
            </form>
        )
    }    
}



export default AddUser;