import { Author, Post, View, GitHubApi } from './connectors';

const resolvers = {
  Query: {
    author(_, args) {
      return Author.find({ where: args });
    },
    post(_, args) {
      return Post.find({ where: args });
    },
    posts(_, args) {
      return Post.findAll();
    },
    getGitHubUserOrgs(_, args){
      return GitHubApi.getUserOrgs(args);
    }
  },
  Author: {
    posts(author) {
      return author.getPosts();
    },
  },
  Post: {
    author(post) {
      return post.getAuthor();
    },
    views(post) {
      return View.findOne({ postId: post.id }).then((view) => view.views);
    },
  },
};

export default resolvers;
