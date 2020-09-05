import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";
import AddUser from "./CreateUser";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state = {
    users: [],
  };

  createContact = (user) => {
    user.numGamesPlayed = 0;
    this.setState((currState) => ({
      users: [...currState.users, user],
    }));
  };

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">ReactND - Coding Practice</h1>
          </header>
        </div>
        <div>
          <div>
            <h2 className="App-subTitle">Cretate User</h2>
          </div>
          <CreateUser users={this.state.users} onAddUser={this.createContact} />
        </div>
        <div>
          <div>
            <h2 className="App-subTitle">User List</h2>
          </div>
          <CreateUser users={this.state.users} onAddUser={this.createContact} />
        </div>
        {/* <div>
          <UserList userList={this.state.userList} />
        </div> */}
      </div>
    );
  }
}

export default App;
