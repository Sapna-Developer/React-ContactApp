import React from "react";

const ContactCard = (props) => {
  const {id, name, email} =props.contact;
return (
<div className="item">
  <img className="ui avatar image" src=
  {"https://e7.pngegg.com/pngimages/81/570/png-clipart-profile-logo-computer-icons-user-user-blue-heroes-thumbnail.png"} alt="user" />
        <div className="content">
          <div className="header">
            {name}
            <div>{email}</div>
          </div>
          <i className="trash alternate outline icon"
          style={{color:"red", marginTop:"7px"}}></i>
        </div>
      </div>
);
};


export default ContactCard;