import { observable } from 'mobx';
import { AppStore } from './';
import { NewsItem } from './../models';

export default class NewsStore {
  appStore: AppStore;
  @observable isLoading: boolean = false;
  @observable news: NewsItem[] = [];

  constructor(appStore: AppStore) {
    this.appStore = appStore;
    this.loadNews();
  }
  async loadNews() {
    this.isLoading = true;
    this.news = await this.appStore.transportLayer.get('/news');
    this.isLoading = false;
  }
  getNews() {
    return this.appStore.newsStore.news;
  }
  getNewsById(id: number) {
    if (id && id > 0) return this.appStore.newsStore.news.find((x: NewsItem) => x.id == id);
    throw new Error('INVALID ID');
  }
}
