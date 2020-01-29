import React, { Component } from 'react'
import { inject } from 'mobx-react'

import ContactService from '../services/ContactService'

@inject('ContactStore')
class ContactEdit extends Component {
    state = {
        contact: {
            name: '',
            email: '',
            phone: ''
        }
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            this.loadContact();
        }
    }

    componentDidUpdate(prevProps) {
        const { id } = this.props.match.params
        if (prevProps.match.params.id
            !== id) {
            this.loadContact();
        }
    }

    loadContact = () => {
        const { id } = this.props.match.params;
        const { ContactStore } = this.props
        if (id) {
            ContactStore.loadContact(id);
            this.setState({ contact: ContactStore.contact })
        } else {
            this.setState({ contact: ContactService.getEmptyContact() })
        }
    }

    onSaveContact = (ev) => {
        ev.preventDefault()
        this.props.ContactStore.addContact(this.state.contact)
        this.props.history.push('/contact')
    }

    onGoBack = () => {
        this.props.history.push('/contact')
    }

    changeInput = (ev) => {
        const field = ev.target.name;
        const value = ev.target.value;
        this.setState(prevstate => ({ contact: { ...prevstate.contact, [field]: value } }));
    }

    render() {
        const { name, email, phone } = this.state.contact

        return (
            <div className="edit-container">
                <label htmlFor="">name</label>
                <input type="text" name="name" value={name} onChange={this.changeInput} />
                <label htmlFor="">email</label>
                <input type="text" name="email" value={email} onChange={this.changeInput} />
                <label htmlFor="">phone</label>
                <input type="text" name="phone" value={phone} onChange={this.changeInput} />
                <button onClick={this.onSaveContact}>Save</button>
            </div>
        )
    }
}
export default ContactEdit
