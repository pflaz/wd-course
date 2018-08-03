import React from 'react';

const NewCommentForm = ({addComment}) => 
<div>
    <form onSubmit={
        (event) => {
            event.preventDefault();
            addComment(event.target['newCommentText'].value);
            event.target['newCommentText'].value = '';
            }
        }
    >
    <input type="text" name="newCommentText" />
    </form>
</div>;

export default NewCommentForm;