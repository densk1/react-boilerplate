import React, { Component } from 'react';

import PreviousComments from './previousComments';
import CommentBox from './commentBox';


class Comments extends Component {

    render () {
        return(
            <div className="container">
                <CommentBox />
                <PreviousComments/>
            </div>
        )
    }
}

export default Comments;


/*}

*/