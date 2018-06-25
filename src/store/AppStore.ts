import { observable } from 'mobx';
import { DomainStore } from './';

export default class NewsStore {
  domainStore: DomainStore;

  @observable loggedInUser = false;

  constructor(domainStore: DomainStore) {
    this.domainStore = domainStore;
  }
}
