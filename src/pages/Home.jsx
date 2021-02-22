import React from 'react';
import HomeCarousel from '../components/HomeCarousel';

class Home extends React.Component {
  render() {
    return (
      <section className="App-home">
        <h1>Home section</h1>
        <HomeCarousel />
      </section>
    );
  }
}

export default Home;
