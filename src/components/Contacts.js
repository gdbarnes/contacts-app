import React, { Component } from "react";
import Contact from "./Contact";
import LoaderHOC from "../HOC/LoaderHOC";

class Contacts extends Component {
  state = {
    searchText: ""
  };

  renderContact(contact) {
    return (
      <Contact
        key={contact.id}
        name={contact.name}
        email={contact.email}
        thumbnail={contact.thumbnail}
      />
    );
  }

  renderContacts() {
    const contacts = this.props.contacts.map(
      contact =>
        contact.name.includes(this.state.searchText)
          ? this.renderContact(contact)
          : null
    );

    return contacts;
  }

  handleChange(event) {
    this.setState({ searchText: event.target.value });
  }

  render() {
    // console.log(this.props.contacts[0]);
    return (
      <div>
        <input
          type="text"
          className="contact-search"
          placeholder="Type to search"
          onChange={this.handleChange.bind(this)}
        />
        <ul className="contacts-list">
          {this.renderContacts()}
        </ul>
      </div>
    );
  }
}

export default LoaderHOC(Contacts);
