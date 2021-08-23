import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProjectDetails from './ProjectDetails';
import ProjectList from './ProjectList';

import projectsArr from '../data/projects.json'


function Main() {

  return (
    <Switch>
      <Route path="/" exact>
        display homepage
      </Route>


      <Route path="/projects" exact>
        <ProjectList projectsArr={projectsArr} />
      </Route>


      <Route path="/projects/:id" render={ routeProps => {

        const requestedProject = projectsArr.find( project => {
          return project.id == routeProps.match.params.id;
        });

        return <ProjectDetails {...requestedProject}  />
      }} />


      <Route path="/about">
        display about page
      </Route>


      <Route path="/blog">
        display blog
      </Route>
    </Switch>
  );
}

export default Main;
