import React from 'react';
import Slide from 'react-reveal/Slide';
import "./reveal.css"
class SlideExample extends React.Component {
  render() {
    return (
      <div>
        <Slide top>
          <h2 className="head4">Hello,</h2>
          <h1 className="head5">I'm Anup.</h1>
        </Slide>
      </div>
    );
  }
}

export default SlideExample;
