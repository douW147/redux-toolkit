import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import contactsSlice from "../../slices/contacts";
import {v4 as uuid} from "uuid";
import "./index.css";
import "../../store";
import { fetchContactsThunk, addContactsThunk, editContactsThunk, deleteContactsThunk } from "../../thunks/contacts"

function Contacts() {

    const generateContatct = () => {
        return {
                id: uuid(),
                firstName: "",
                lastName: "",
                email: "",
                phone: ""} 
    }

    const contacts = useSelector(state => state.contacts);
    const status = useSelector(state => state.contacts.status);
    const dispatch = useDispatch();
    const [newContact, setNewContact] = useState(generateContatct());
    const [editContact, setEditContact] = useState(generateContatct());

    useEffect(()=> {
        dispatch(fetchContactsThunk())
    }, [dispatch])

    const handleInputChange = (event) => {
        setNewContact(oldCont => ({...oldCont, [event.target.id]: event.target.value}));
    }

    const handleEditChange = (event) => {
        setEditContact(oldCont => ({...oldCont, [event.target.id]: event.target.value}));
    }

    const handleAddClick = (event) => {
        event.preventDefault();
        dispatch(addContactsThunk(newContact));
        setNewContact(generateContatct);
        
    }

    const handleDeleteClick = (id) => {
        dispatch(deleteContactsThunk(id));
    } 

    const handleEdit = (contact) => {
        setEditContact(contact);
    }
    const handleSave = () => {
        dispatch(editContactsThunk(editContact));
        setEditContact(generateContatct())
    }

    return <div className="row justify-content-center mt-3 --width100">
        <div className="col-lg-7 col-md-9 col-sm-11 shadow-lg">
            <div className="card-heading m-5 mb-4 border-bottom">
                <h4>Contacts
                    {status === "pending" && <span>   loading...</span>}
                </h4>
            </div>
            <div className="form-container m-5 mt-4 mb-1">
                <details>
                    <summary>
                        New contact
                    </summary>
                    <form>
                        <div className="form-group mb-2">
                            <input type="text" className="form-control" id="firstName" value={newContact.firstName} onChange={(event) => {handleInputChange(event)}} placeholder="First name"></input>
                        </div>
                        <div className="form-group mb-2">
                            <input type="text" className="form-control" id="lastName" value={newContact.lastName} onChange={(event) => {handleInputChange(event)}} placeholder="Last name"></input>
                        </div>
                        <div className="form-group mb-2">
                            <input type="text" className="form-control" id="email" value={newContact.email} onChange={(event) => {handleInputChange(event)}} placeholder="Email"></input>
                        </div>
                        <div className="form-group mb-2">
                            <input type="text" className="form-control" id="phone" value={newContact.phone} onChange={(event) => {handleInputChange(event)}} placeholder="Phone"></input>
                        </div>
                        <div className="form-group mb-2 text-end">
                            <button onClick={ (event) => {handleAddClick(event)}} type="submit" className="btn btn-dark">
                                Add
                            </button>
                        </div>
                    </form>
                </details>
            </div>
            <div className="table-container m-5 mt-4">
                <table className="table">
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>First name</td>
                            <td>last name</td>
                            <td>Email</td>
                            <td>Phone</td>
                            <td>details</td>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.data.map((contact, index) => {
                            return <tr key={contact.id}>
                                <td>{index + 1}</td>
                                <td>
                                    {editContact.id === contact.id ? 
                                    <input className="form-control" value={editContact.firstName} id="firstName" onChange={(event) => {handleEditChange(event)}}></input> : 
                                    <span>{contact.firstName}</span>}
                                </td>
                                <td>
                                    {editContact.id === contact.id ? 
                                    <input className="form-control" value={editContact.lastName} id="lastName" onChange={(event) => {handleEditChange(event)}}></input> : 
                                    <span>{contact.lastName}</span>}
                                </td>
                                <td>
                                    {editContact.id === contact.id ? 
                                    <input className="form-control" value={editContact.email} id="email" onChange={(event) => {handleEditChange(event)}}></input> : 
                                    <span>{contact.email}</span>}
                                </td>
                                <td>
                                    {editContact.id === contact.id ? 
                                    <input className="form-control" value={editContact.phone} id="phone" onChange={(event) => {handleEditChange(event)}}></input> : 
                                    <span>{contact.phone}</span>}</td>
                                <td>
                                    <button onClick={() => {handleDeleteClick(contact.id)}} className="btn btn-outline-danger">Delete</button>
                                    {editContact.id === contact.id ? 
                                    <button onClick={handleSave} className="btn btn-outline-success">Save</button> : 
                                    <button onClick={() => {handleEdit(contact)}} className="btn btn-outline-primary">Edit</button>
                                    }
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
};

export default Contacts;