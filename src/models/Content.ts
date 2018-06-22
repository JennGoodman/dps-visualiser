import { User } from './';

export default class Content {
  id: number;
  author: User;
  title: string;
  publicDate: Date;
  content: string;
  constructor(id: number, author: User, title: string, publicDate: Date, content: string) {
    this.id = id;
    this.author = author;
    this.title = title;
    this.publicDate = publicDate;
    this.content = content;
  }
}
