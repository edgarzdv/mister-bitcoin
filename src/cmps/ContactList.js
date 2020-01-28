import React, { Component } from 'react'
import ContactPreview from './ContactPreview'

export default class ContactList extends Component {
    render() {
        const { contacts } = this.props
        return (
            <div>{contacts.map((contact, i) => {
                return <ContactPreview onShowContact={this.props.onShowContact} key={i} contact={contact} />
            })}
            </div>
        )
    }
}
