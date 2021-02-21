import React from 'react';
import AbouSection from '../components/AboutSection';

class About extends React.Component {
  render() {
    return (
      <section className="App-about">
        <h1>About section</h1>
        <AbouSection />
      </section>
    );
  }
}

export default About;
