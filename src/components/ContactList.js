import React from "react";

const ContactList = (props) => {
  console.log(props);

  const renderContactList = props.contacts.map((contact)=>{
    return(
      <div className="item">
        <div className="content">
          <div className="header">
            {contact.name}
            <div>{contact.email}</div>
          </div>
          <i className="trash alternate outline icon"></i>
        </div>
      </div>
    )
  })
  return (
    <div className="ui celled list">
      {<h2>Contact List</h2>}{renderContactList}
    </div>
  );
};

export default ContactList;