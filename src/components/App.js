import React, { Component } from "react";
import Contacts from "./Contacts";
import "./../styles/App.css";

class App extends Component {
  state = { contacts: [] };

  componentDidMount() {
    fetch("https://randomuser.me/api/?nat=gb&results=50")
      .then(response => response.json())
      .then(parsedResponse =>
        parsedResponse.results.map((user, index) => ({
          id: index,
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          thumbnail: user.picture.large
        }))
      )
      .then(contacts => this.setState({ contacts }));
  }

  render() {
    return (
      <div className="app-container">
        <div className="app-header">
          <h2>Contact list</h2>
        </div>
        <div className="app-body">
          <Contacts contacts={this.state.contacts} />
        </div>
      </div>
    );
  }
}

export default App;
