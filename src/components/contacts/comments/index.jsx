import React, { Component } from 'react';

import PreviousComments from './components/PreviousComments';
import CommentBox from './components/CommentBox';


class Comments extends Component {

    render () {
        return(
            <div className="container-fluid">
                <CommentBox />
                <PreviousComments/>
            </div>
        )
    }
}

export default Comments;


/*}

*/