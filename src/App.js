import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = { contacts: [] };

  componentDidMount() {
    fetch("https://randomuser.me/api/?nat=gb&results=50")
      .then(response => response.json())
      .then(parsedResponse =>
        parsedResponse.results.map(user => ({
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          thumbmail: user.picture.thumbnail
        }))
      )
      .then(contacts => this.setState({ contacts }));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Contact list</h2>
        </div>
        <p className="App-intro">
          {/* <ContactsApp contacts={this.state.contacts} /> */}
        </p>
      </div>
    );
  }
}

export default App;
