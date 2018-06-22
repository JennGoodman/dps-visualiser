import * as url from 'url';

export default class TransportLayer {
  host: string;

  constructor(host: string) {
    this.host = host;
  }
  async get(endPointUrl: string) {
    const getUrl = url.resolve(this.host, endPointUrl);
    const getResponse = await fetch(getUrl);
    const json = await getResponse.json();
    return json;
  }
  async post(endPointUrl: string) {
    const postUrl = url.resolve(this.host, endPointUrl);
    const postResponse = await fetch(postUrl);
    const json = await postResponse.json();
    return json;
  }
}
