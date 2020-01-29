import ContactService from "../services/ContactService";
import { observable, decorate, action, runInAction } from 'mobx'

class Store {
    @observable contacts = [];
    @observable filterBy = '';


    loadContacts = async () => {
        return ContactService.getContacts(filterBy).then(contacts => {
            runInAction(() => {
                this.contacts = contacts
            })
        })
        // const { filterBy } = this.state
        // const contacts = await ContactService.getContacts(filterBy)
        // this.setState({ contacts: contacts })
    }

    // loadRobots() {
    //     return robotService.getRobots(this.filterBy).then((robots) => {
    //         runInAction(() => {
    //             this.robots = robots
    //         })
    //     })
    // }
    // @action
    // setFilter(filterBy) {
    //     this.filterBy = filterBy;
    //     this.loadRobots();
    // }

    // async addRobot(robot) {
    //     robot = await robotService.saveRobot(robot)
    //     runInAction(() => {
    //         this.robots.push(robot)
    //     })
    // }
}
let store = new Store();
export default store