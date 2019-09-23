import {Post} from './Post';

export class Member {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  regDate: Date;
  posts: Post[];
  roles: string[];
}
