import { observable } from 'mobx';
import { DomainStore } from './';
import { NewsItem } from './../models';

export default class NewsStore {
  domainStore: DomainStore;
  @observable isLoading: boolean = false;
  @observable news: NewsItem[] = [];

  constructor(domainStore: DomainStore) {
    this.domainStore = domainStore;
    this.loadNews();
  }
  async loadNews() {
    this.isLoading = true;
    this.news = await this.domainStore.transportLayer.get('/news');
    this.isLoading = false;
  }
  getNews() {
    return this.domainStore.newsStore.news;
  }
  getNewsById(id: number) {
    if (id && id > 0) return this.domainStore.newsStore.news.find((x: NewsItem) => x.id == id);
    throw new Error('INVALID ID');
  }
}
