const typeDefinitions = `
type Author {
  id: Int
  firstName: String
  lastName: String
  posts: [Post]
}

type Post {
  id: Int
  title: String
  text: String
  views: Int
  author: Author
}

type GitHubOrg {
  login: String
  id: Int
  url: String
  avatar_url: String
}

type Query {
  author(firstName: String, lastName: String): Author
  getGitHubUserOrgs(username: String): [GitHubOrg]
  post(id: Int): Post
  posts: [Post]
}

schema {
  query: Query
}
`;

export default [typeDefinitions];
