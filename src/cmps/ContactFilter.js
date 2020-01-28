import React, { Component } from 'react'

export default class ContactFilter extends Component {

    changeInput = (ev) => {
        const field = ev.target.name;
        const value = (ev.target.type === 'range') ? +ev.target.value : ev.target.value;
        this.props.onSetFilter({ [field]: value })
    }

    render() {
        const { filterBy } = this.props
        return <div >
            <input type="text" placeholder="Book title" value={filterBy}
                onChange={this.changeInput} name="term"></input>

        </div>
    }
}
