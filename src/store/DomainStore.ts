import { NewsStore, ContentStore, UserStore, AppStore } from './';
import { TransportLayer } from './../models';

export default class DomainStore {
  appStore: AppStore;
  newsStore: NewsStore;
  contentStore: ContentStore;
  userStore: UserStore;
  transportLayer: TransportLayer;
  // Configuration
  host: string = 'http://localhost/';
  constructor() {
    this.transportLayer = new TransportLayer(this.host);
    this.appStore = new AppStore(this);
    this.newsStore = new NewsStore(this);
    this.contentStore = new ContentStore(this);
    this.userStore = new UserStore(this);
  }
}
