export default class Content {
  id: number;
  username: string;
  avatar: string;
  constructor(id: number, username: string, avatar: string) {
    this.id = id;
    this.username = username;
    this.avatar = avatar;
  }
}
