import React from 'react';
import ProjectsSection from '../components/ProjectsSection';

class Projects extends React.Component {
  render() {
    return (
      <section className="App-projects">
        <h1>Projects section</h1>
        <ProjectsSection />
      </section>
    );
  }
}

export default Projects;
