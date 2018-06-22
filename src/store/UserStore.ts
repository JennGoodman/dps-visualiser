import { observable } from 'mobx';
import { AppStore } from './';
import { User } from './../models';

export default class UserStore {
  appStore: AppStore;
  @observable isLoading: boolean = false;
  @observable users: User[] = [];

  constructor(appStore: AppStore) {
    this.appStore = appStore;
    this.loadUsers();
  }
  async loadUsers() {
    this.isLoading = true;
    this.users = await this.appStore.transportLayer.get('/users');
    this.isLoading = false;
  }
  getUsers() {
    return this.appStore.userStore.users;
  }
  getUserById(id: number) {
    if (id && id > 0) return this.appStore.userStore.users.find((x: User) => x.id == id);
    throw new Error('INVALID ID');
  }
}
