import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import { bindActionCreaters, bindActionCreators } from 'redux';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
            </div>
        );
    };
}


CoursesPage.PropTypes = {
    actions: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired

};

const mapStateToProps = (state, ownProps) => ({courses: state.courses});

const mapDispatchToProps = dispatch => {
    return {
        //createCourse : course => dispatch(courseActions.createCourse(course))
        actions : bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);