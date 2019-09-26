import {Member} from './Member';

export class Post {
  id: number;
  title: string;
  author: Member;
  publishDate: Date;
  postBody: string;
  category: string;
  isPublished: boolean;
}
