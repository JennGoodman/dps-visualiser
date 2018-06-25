import { observable } from 'mobx';
import { DomainStore } from './';
import { Content } from './../models';

export default class ContentStore {
  domainStore: DomainStore;
  @observable isLoading: boolean = false;
  @observable content: Content[] = [];

  constructor(domainStore: DomainStore) {
    this.domainStore = domainStore;
    this.loadContent();
  }
  async loadContent() {
    this.isLoading = true;
    this.content = await this.domainStore.transportLayer.get('/content');
    this.isLoading = false;
  }
  getContent() {
    return this.domainStore.contentStore.content;
  }
  getContentById(id: number) {
    if (id && id > 0) return this.domainStore.contentStore.content.find((x: Content) => x.id == id);
    throw new Error('INVALID ID');
  }
}
