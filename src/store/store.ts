import { observable } from 'mobx';

export class AppStore {
  newsStore: NewsStore;
  contentStore: ContentStore;

  constructor() {
    this.newsStore = new NewsStore(this);
    this.contentStore = new ContentStore(this);
  }
}

export class NewsStore {
  appStore: AppStore;
  @observable news = [];

  constructor(appStore: AppStore) {
    this.appStore = appStore;
  }
}

export class ContentStore {
  appStore: AppStore;

  constructor(appStore: AppStore) {
    this.appStore = appStore;
  }

  getContent() {
    this.appStore.newsStore.news;
  }
}

export class NewsItem {
  id: Number;
  title: String;
  date: Date;
  content: String;
  constructor(id: Number, title: String, date: Date, content: String) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.content = content;
  }
}
