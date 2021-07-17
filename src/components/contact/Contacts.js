import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteContact } from './../../actions/contactActions';

function Contacts() {
  const contacts = useSelector((state) => state.contact.contacts);
  const dispatch = useDispatch();
  return (
    <div>
      <table className="table shadow">
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>OfficePhone</th>
            <th>ResidentialPhone</th>
            <th>City</th>
            <th>Country</th>
            <th>Street Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                {contact.fName}
              </td>
              <td>
                {contact.lName}
              </td>
              <td>{contact.officePhone}</td>
              <td>{contact.residentialPhone}</td>
              <td>{contact.city}</td>
              <td>{contact.country}</td>
              <td>{contact.address}</td>
              <td className="action">
                <Link to={`/contacts/edit/:${contact.id}`}>
                  <span className="material-icons mr-2">edit</span>
                </Link>
                
                  <span className="material-icons text-danger" onClick={() => dispatch(deleteContact(contact.id))}>
                    remove_circle
                  </span>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Contacts;
