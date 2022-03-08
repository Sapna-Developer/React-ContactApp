import React from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

import "./App.css";

const contacts=[
  {
    id:"1", name: "sapna", email: "sapnapandey.sash@gmail.com",
  },
  {
    id:"2", name: "Ketzia", email: "gadsiya17101999@gmail.com",
  }
];

function App() {
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList  contacts={contacts}/>
    </div>
  );
}
export default App;