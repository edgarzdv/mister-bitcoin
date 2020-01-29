import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import ContactList from '../cmps/ContactList'
import ContactFilter from '../cmps/ContactFilter'

@inject('ContactStore')
@observer
class ContactPage extends Component {

    componentDidMount() {
        this.props.ContactStore.loadContacts()
    }

    setFilter = (filterBy) => {
        this.props.ContactStore.setFilter(filterBy)
    }

    render() {
        return (
            <div>
                <ContactFilter onSetFilter={this.setFilter} />
                <ContactList onShowContact={this.onShowContact} contacts={this.props.ContactStore.contacts} />
            </div>
        )
    }
}
export default ContactPage