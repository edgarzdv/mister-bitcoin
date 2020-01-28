import React, { Component } from 'react'
import { Link} from 'react-router-dom';

export default class ContactPreview extends Component {

    // showContact = (ev) => {
    //     this.props.onShowContact(ev.target.dataset.id)
    // }
    render() {
        return (
              <Link to={`/contact/${this.props.contact._id}`} >
            <div className="contact" data-id={this.props.contact._id}>
                <img className="contact-img" src={`https://robohash.org/${this.props.contact.name}.png`} alt="" />
                {this.props.contact.name}
            </div>
            </Link>
        )
    }
}
