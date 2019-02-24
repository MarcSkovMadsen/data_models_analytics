export class Blog {
  id: number;
  url: string;
}
export class Post {
  id: number = 0;
  url: string;
  title = "New Post"
  created: Date = new Date()
  last_update: Date = new Date()
  author: string = "Marc Skov Madsen";
  tags: Tag[] = []
  views: number = 0
  likes: number = 0
  comments: Comment[] = []
  content_markdown: string = "The content is written in Mark Down";
  content_html: string;
}
export class Tag {
  id: number = 1;
  url: string;
  name: string

  constructor(name: string) {
    this.name = name;
  }
}
export class Comment {
  id: number = 1;
  url: string;
  comment: string = ""
  likes: number = 0
  child_comments: Comment[]
  constructor(comment: string, likes: number = 0, child_comments: Comment[] = []) {
    this.comment = comment;
    this.likes = likes
  }
}