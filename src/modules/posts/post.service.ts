import db from "../../db.ts";

import { Post } from "./post.ts";

const posts = db.collection("posts");

export class PostService {
  static async getAll(): Promise<Post[]> {
    return posts.find({});
  }

  static async getById(id: string | null): Promise<Post> {
    return posts.findOne({ _id: id });
  }

  static async insertOne(body: Post): Promise<Post> {
    return posts.insertOne(body);
  }

  static async updateOne(id: string | null, body: Post): Promise<any> {
    return posts.updateOne(
      { _id: id },
      { $set: body },
    );
  }

  static async deleteOne(id: string | null): Promise<number> {
    return posts.deleteOne({ _id: id });
  }
}
