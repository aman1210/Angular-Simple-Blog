export class Blog {
  public _id: string;
  public btitle: string;
  public bimage: string;
  public blog: string;

  constructor(id: string, title: string, img: string, blog: string) {
    this._id = id;
    this.bimage = img;
    this.btitle = title;
    this.blog = blog;
  }
}
