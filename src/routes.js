import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import AboutPage from './components/about/AboutPage';
import HomePage from './components/home/HomePage';
import CoursesPage from './components/course/CoursesPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}></IndexRoute>
        <Route path="about" component={AboutPage}></Route>
        <Route path="courses" component={CoursesPage}></Route>
    </Route>
);