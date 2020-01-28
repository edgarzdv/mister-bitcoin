import React, { Component } from 'react'
import ContactService from '../services/ContactService';

export default class ContactDetails extends Component {

    state = {
        contact: {
            _id: '',
            name: '',
            email: '',
            phone: ''
        }
    }
    componentDidMount() {
        this.loadContact();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id
            !== this.props.match.params.id) {
            this.loadContact();
        }
    }

    onUnSelectBook = () => {
        this.props.history.push('/books')
    }

    loadContact = async () => {
        if (this.props.match.params) {

            const { id } = this.props.match.params;
            const contact = await ContactService.getContactById(id)
            this.setState({ contact: contact })
        }
    }

    onSaveContact = (ev) => {
        ev.preventDefault()
        ContactService.saveContact(this.state.contact)
    }

    onGoBack = () => {
        this.props.history.push('/contact')
    }

    onDeleteContact = () => {
        ContactService.deleteContact(this.state.contact._id)
        this.props.history.push('/contact')
    }

    changeInput = (ev) => {
        const field = ev.target.name;
        const value = (ev.target.type === 'range') ? +ev.target.value : ev.target.value;
        this.setState(prevstate => ({ contact: { ...prevstate.contact, [field]: value } }));
    }

    render() {
        const { name, email, phone } = this.state.contact
        return (
            <div className="contact-details">
                <img className="details-img" src={`https://robohash.org/${name}.png`} alt="" />
                <div className="details-inputs">
                    <label htmlFor="">name</label>
                    <input type="text" name="name" value={name} onChange={this.changeInput} />
                    <label htmlFor="">email</label>
                    <input type="text" name="email" value={email} onChange={this.changeInput} />
                    <label htmlFor="">phone</label>
                    <input type="text" name="phone" value={phone} onChange={this.changeInput} />
                    <button onClick={this.onSaveContact}>Save</button>
                </div>
                <button onClick={this.onGoBack}>Back</button>
                <button onClick={this.onDeleteContact}>Delete</button>

            </div>
        )
    }
}
