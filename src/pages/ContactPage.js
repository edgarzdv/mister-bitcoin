import React, { Component } from 'react'
import {observer, inject} from 'mobx-react'

import ContactList from '../cmps/ContactList'
import ContactFilter from '../cmps/ContactFilter'
// import ContactService from '../services/ContactService'

@inject('Store')
@observer
class ContactPage extends Component {
    state = { contacts: [], filterBy: { term: '' } }

    componentDidMount() {
        this.props.loadContacts()
    }


    onSetFilter = (newFilterField) => {
        this.setState(prevstate => ({ filterBy: { ...prevstate.filterBy, ...newFilterField } }), this.props.loadContacts);
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
export default ContactPage