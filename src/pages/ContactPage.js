import React, { Component } from 'react'

import ContactList from '../cmps/ContactList'
import ContactService from '../services/ContactService'
export default class ContactPage extends Component {
    state = { contacts: [] }
    componentDidMount() {
        this.loadContacts()
    }
    loadContacts = async () => {
        const contacts = await ContactService.getContacts()
        this.setState({ contacts: contacts})
    }

    onShowContact=(contactId)=>{
        console.log(contactId);
        
    }

    render() {
        console.log(this.state.contacts);

        return (
            <div>
                <ContactList onShowContact={this.onShowContact} contacts={this.state.contacts} />
            </div>
        )
    }
}
