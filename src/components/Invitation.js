// Code Invitation Component Here

<<<<<<< HEAD
import React from 'react';
// import React, { Component } from 'react' // We need to import react so we can make use of its .component class
// import ReactDOM from 'react-dom' // ...and we need to import ReactDOM so we can create and test a virtual DOM with react!
=======
import React, { Component } from 'react' // We need to import react so we can make use of its .component class
import ReactDOM from 'react-dom' // ...and we need to import ReactDOM so we can create and test a virtual DOM with react!
>>>>>>> 6d38b14d166ff4822d43dc83dbf600dad60e575f


export default class Invitation  extends React.Component {
  render() {
    return (
      <div>
<<<<<<< HEAD
        <h1>You've been invited!</h1>
        {this.props.children}
=======
        <h1>You\'ve been invited!</h1>
        <div>{this.props.children}</div>
>>>>>>> 6d38b14d166ff4822d43dc83dbf600dad60e575f
      </div>
    );
  }
}
<<<<<<< HEAD
=======

export default Invitation;
>>>>>>> 6d38b14d166ff4822d43dc83dbf600dad60e575f
