import React, { Component } from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends Component {
  state = {
    filterText: '',
  };

  handleChange = e => {
    const { value } = e.target;

    this.setState({
      filterText: value,
    });
  };

  render() {
    let filteredUsers;
    if (this.state.filterText === '') {
      filteredUsers = this.props.users;
    } else
      filteredUsers = this.props.users.filter(
        user => user.name.toLowerCase().includes(this.state.filterText.toLowerCase()),
        // this.state.filterText.includes(user.name.toLowerCase()),
      );

    return (
      <>
        <Filter
          filterText={this.state.filterText}
          count={filteredUsers.length}
          onChange={this.handleChange}
        />
        {filteredUsers.map(user => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </>
    );
  }
}
export default UsersList;
