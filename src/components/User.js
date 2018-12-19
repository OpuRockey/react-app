import React, { Component } from 'react';

class User extends Component {

	constructor(props){
		super(props);
		console.log(props.match.params.id);
	}

  render() {
    return (
      <div>Hello From User</div>
    );
  }
}

export default User;
