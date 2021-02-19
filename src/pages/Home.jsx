import React from 'react';
import HomeCarousel from '../components/HomeCarousel';

class Home extends React.Component {
  render() {
    return (
      <section className="App-home">
        Home section for Web Portfolio with React
        <HomeCarousel />
      </section>
    );
  }
}

export default Home;
