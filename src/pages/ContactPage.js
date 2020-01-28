import React, { Component } from 'react'
import { Link} from 'react-router-dom';

import ContactList from '../cmps/ContactList'
import ContactFilter from '../cmps/ContactFilter'
import ContactService from '../services/ContactService'
export default class ContactPage extends Component {
    state = { contacts: [], filterBy: { term: ''} }

    componentDidMount() {
        this.loadContacts()
    }

    loadContacts = async () => {
        const { filterBy } = this.state
        const contacts = await ContactService.getContacts(filterBy)
        this.setState({ contacts: contacts })
    }



    onSetFilter = (newFilterField) => {
        this.setState(prevstate => ({ filterBy: { ...prevstate.filterBy, ...newFilterField } }), this.loadContacts);
    }

    render() {
        return (
            <div>
                <ContactFilter onSetFilter={this.onSetFilter} />
                <ContactList onShowContact={this.onShowContact} contacts={this.state.contacts} />
                
            </div>
        )
    }
}
