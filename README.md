# node-graphql-react-demo

Based on [Tutorial: How to build a GraphQL server](https://medium.com/apollo-stack/tutorial-building-a-graphql-server-cddaa023c035#.wy5h1htxs)

Then open [http://localhost:8080/graphql](http://localhost:8080/graphql)

When you paste this on the left:

Posts

```
{
  posts {
    id
    title
    author {
      firstName
      lastName
    }
  }
}
```  

Post

```
{
  post(id: 1) {
    id
    title
    author {
      id
      firstName
      lastName
      posts {
        id
    		title
      }
    }
  }
}
```  

getGitHubUserOrgs
```
{
  getGitHubUserOrgs(username: "tb") {
    id
    login
    url
    avatar_url
  }
}
```
