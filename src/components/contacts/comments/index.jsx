import React from 'react';

import PreviousComments from './components/PreviousComments';
import CommentBox from './components/CommentBox';

const Comments = () => (
  <div className="container-fluid">
    <CommentBox />
    <PreviousComments />
  </div>
);

export default Comments;
