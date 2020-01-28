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


// const { books, onSelectBook } = props

// return <div className="flex wrap justify-center">{books.map((book, i) => {
//     return <BookPreview onSelectBook={onSelectBook} key={i} book={book} />
// })}
// </div>