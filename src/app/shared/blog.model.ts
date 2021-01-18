import { CommentModel } from './comment.model';

export class Blog {
  public _id: string;
  public btitle: string;
  public bimage: string;
  public blog: string;
  public likes: number;
  public comments: CommentModel[];

  constructor(
    id: string,
    title: string,
    img: string,
    blog: string,
    likes: number,
    comments: CommentModel[]
  ) {
    this._id = id;
    this.bimage = img;
    this.btitle = title;
    this.blog = blog;
    this.likes = likes;
    this.comments = comments;
  }
}
