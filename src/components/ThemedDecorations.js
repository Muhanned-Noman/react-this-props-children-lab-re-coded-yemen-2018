// Code ThemedDecoration Component Here

<<<<<<< HEAD
import React from 'react';
// import React, { Component } from 'react' // We need to import react so we can make use of its .component class
// import ReactDOM from 'react-dom' // ...and we need to import ReactDOM so we can create and test a virtual DOM with react!
=======
import React, { Component } from 'react' // We need to import react so we can make use of its .component class
import ReactDOM from 'react-dom' // ...and we need to import ReactDOM so we can create and test a virtual DOM with react!
>>>>>>> 6d38b14d166ff4822d43dc83dbf600dad60e575f


export default class ThemedDecorations  extends React.Component {
  render() {
    const childrenWithExtraProp = React.Children.map(this.props.children, child => React.cloneElement(child, {
      className: this.props.theme,
    }));
    return (
      <div>
        {childrenWithExtraProp}
      </div>
    );
  }
}
<<<<<<< HEAD
=======

export default ThemedDecorations;
>>>>>>> 6d38b14d166ff4822d43dc83dbf600dad60e575f
