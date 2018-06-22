import { observable } from 'mobx';
import { AppStore } from './';
import { Content } from './../models';

export default class ContentStore {
  appStore: AppStore;
  @observable isLoading: boolean = false;
  @observable content: Content[] = [];

  constructor(appStore: AppStore) {
    this.appStore = appStore;
    this.loadContent();
  }
  async loadContent() {
    this.isLoading = true;
    this.content = await this.appStore.transportLayer.get('/content');
    this.isLoading = false;
  }
  getContent() {
    return this.appStore.contentStore.content;
  }
  getContentById(id: number) {
    if (id && id > 0) return this.appStore.contentStore.content.find((x: Content) => x.id == id);
    throw new Error('INVALID ID');
  }
}
