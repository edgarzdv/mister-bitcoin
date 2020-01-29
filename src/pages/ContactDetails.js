import React, { Component } from 'react'
import { Link } from 'react-router-dom';


import { observer, inject } from 'mobx-react'



@inject('ContactStore')
@observer
class ContactDetails extends Component {
    state = { contact: null }

    componentDidMount() {
        this.loadContact();
    }

    componentDidUpdate(prevProps) {
        const { id } = this.props.match.params
        if (prevProps.match.params.id
            !== id) {
            this.loadContact();
        }
    }

    loadContact = () => {
        if (this.props.match.params) {
            const { id } = this.props.match.params;
            this.props.ContactStore.loadContact(id);
        }
    }

    onSaveContact = (ev) => {
        ev.preventDefault()
        this.props.ContactStore.addContact(this.state.contact)
    }

    onGoBack = () => {
        this.props.history.push('/contact')
    }

    onDeleteContact = () => {
        const { _id } = this.props.ContactStore.contact
        this.props.ContactStore.deleteContact(_id)
        this.props.history.push('/contact')
    }

    changeInput = (ev) => {
        const field = ev.target.name;
        const value = ev.target.value;
        this.setState(prevstate => ({ contact: { ...prevstate.contact, [field]: value } }));
    }

    render() {
        const { name, email, phone } = this.props.ContactStore.contact
        return (
            <div className="contact-details">
                <img className="details-img" src={`https://robohash.org/${name}.png`} alt="" />
                <div className="details-inputs">
                    <span>name: {name}</span>
                    <span>email: {email}</span>
                    <span>phone: {phone}</span>
                </div>
                <button onClick={this.onGoBack}>Back</button>
                <button onClick={this.onDeleteContact}>Delete</button>
                <Link to={`/contact/edit/${this.props.match.params.id}`} >Edit</Link>
            </div>
        )
    }
}
export default ContactDetails