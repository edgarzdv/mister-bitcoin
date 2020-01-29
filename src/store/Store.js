import ContactService from "../services/ContactService";
import { observable, decorate, action, runInAction, toJS } from 'mobx'

class ContactStore {
    @observable contact = [];
    @observable contacts = [];
    @observable filterBy = '';

    async loadContacts() {
        const contacts = await ContactService.getContacts(this.filterBy)
        runInAction(() => {
            this.contacts = contacts
        })
    }

    @action
    setFilter(filterBy) {
        this.filterBy = filterBy;
        this.loadContacts();
    }

    async addContact(contact) {
        contact = await ContactService.saveContact(contact)
        runInAction(() => {
            this.contacts.push(contact)
        })
    }

    async loadContact(id) {
        const contact = await ContactService.getContactById(id)
        runInAction(() => {
            this.contact = contact
        })
    }

    async deleteContact(id) {
        id = await ContactService.deleteContact(id)
        runInAction(() => {
            this.contacts = this.contacts.filter(contact => contact._id !== id)
        })
    }
}

let store = new ContactStore();
export default store