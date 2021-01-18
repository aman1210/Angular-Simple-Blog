export class CommentModel {
  public _id: string;
  public comment: string;

  constructor(id: string, comment: string) {
    this._id = id;
    this.comment = comment;
  }
}
