import React from "react";
import { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

function Contancts() {
  const [contacts, setContacts] = useState([
    {id: 1, name: "Владимир", age: 38, special: "МЧС"},
    {id: 2, name: "Абай", age: 63, special: "Тренер"}
  ]);

  return (
    <div>
      <div>Contacts</div>
      {
        contacts.map(item=>{
          return (
            <div className='contact'>
              <Link to={`/users/${item.name}`} key={item.id}>Number Phone: {item.phone}</Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default Contancts;