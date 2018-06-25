import { observable } from 'mobx';
import { DomainStore } from './';
import { User } from './../models';

export default class UserStore {
  domainStore: DomainStore;
  @observable isLoading: boolean = false;
  @observable users: User[] = [];

  constructor(domainStore: DomainStore) {
    this.domainStore = domainStore;
    this.loadUsers();
  }
  async loadUsers() {
    this.isLoading = true;
    this.users = await this.domainStore.transportLayer.get('/users');
    this.isLoading = false;
  }
  getUsers() {
    return this.domainStore.userStore.users;
  }
  getUserById(id: number) {
    if (id && id > 0) return this.domainStore.userStore.users.find((x: User) => x.id == id);
    throw new Error('INVALID ID');
  }
}
