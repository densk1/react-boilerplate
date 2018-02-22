import React, {Component} from 'react';


class EditUser extends Component {

    render() {
        return(
            <div className="card card-body col-xs-12 offset-sm-1 col-sm-10 offset-md-1 col-md-10 mb-3">
                <h4 className="text-success text-center">Users</h4>
                <table className="col-sm-12 table">
                    <thead className="table-sm">
                        <tr>
                            <th className="w-50 pl-1"> Name</th>
                            <th className="text-center">Admin</th>
                            <th className="text-center">Delete</th>
                        </tr>
                    </thead>
                    <tbody className="table-sm">
                        <tr>
                            <td>CK</td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><button className="btn-sm btn-outline-secondary">Remove</button></td>
                        </tr>
                        <tr>
                            <td>CK</td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><button className="btn-sm btn-outline-secondary">Remove</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default EditUser;