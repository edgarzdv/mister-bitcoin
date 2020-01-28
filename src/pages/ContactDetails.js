import React, { Component } from 'react'
import ContactService from '../services/ContactService';

export default class ContactDetails extends Component {

    state = {
        contact: {
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
        const { id } = this.props.match.params;

        const contact = await ContactService.getContactById(id)
        console.log(contact);
        this.setState({ contact: contact })

    }


    render() {
        const { name, email, phone } = this.state.contact
        return (
            <div className="contact-details">
            <img className="details-img" src={`https://robohash.org/${name}.png`} alt="" />
                <div>
                    <h2>{name}</h2>
                    <h2>{email}</h2>
                    <h2>{phone}</h2>
                </div>
            </div>
        )
    }
}
