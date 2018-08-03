import React from 'react';
import Comment from './CommentContainer';
import NewCommentForm from './NewCommentFormContainer';
import style from './CommentsList.css';

const CommentsList = ({comments}) => 
<div>
    <ul>{comments.map(comment => <Comment key={comment.id} {...comment}/>)}</ul>
    <NewCommentForm />
</div>

export default CommentsList;