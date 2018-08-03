import {connect} from 'react-redux';
import NewCommentForm from './NewCommentForm';
import {addComment} from './actions';

const mapDispatchToProps = dispatch => ({
    addComment: (text) => dispatch(addComment(text))
});

export default connect(null, mapDispatchToProps)(NewCommentForm);