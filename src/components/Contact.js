import React from "react";

function Contact(props) {
  // const winningContactClass = ;
  return (
    <li className="contact">
      <a className="contact-image-link" href={`mailto:${props.email}`}>
        <img className="contact-image" alt={props.name} src={props.thumbnail} />
      </a>
      <p className="contact-name">
        {props.name}
      </p>
      <p>
        <a className="contact-email" href={`mailto:${props.email}`}>
          {props.email}
        </a>
      </p>
    </li>
  );
}

export default Contact;
