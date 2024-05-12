    //require('dotenv').config()
    import * as dotenv from 'dotenv';
    dotenv.config();
    import express from 'express';
    const app = express();
    const port = process.env.PORT;
    const githubData = {
      "login": "shreyasdeshmukh",
      "id": 7140957,
      "node_id": "MDQ6VXNlcjcxNDA5NTc=",
      "avatar_url": "https://avatars.githubusercontent.com/u/7140957?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/shreyasdeshmukh",
      "html_url": "https://github.com/shreyasdeshmukh",
      "followers_url": "https://api.github.com/users/shreyasdeshmukh/followers",
      "following_url": "https://api.github.com/users/shreyasdeshmukh/following{/other_user}",
      "gists_url": "https://api.github.com/users/shreyasdeshmukh/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/shreyasdeshmukh/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/shreyasdeshmukh/subscriptions",
      "organizations_url": "https://api.github.com/users/shreyasdeshmukh/orgs",
      "repos_url": "https://api.github.com/users/shreyasdeshmukh/repos",
      "events_url": "https://api.github.com/users/shreyasdeshmukh/events{/privacy}",
      "received_events_url": "https://api.github.com/users/shreyasdeshmukh/received_events",
      "type": "User",
      "site_admin": false,
      "name": null,
      "company": null,
      "blog": "",
      "location": null,
      "email": null,
      "hireable": null,
      "bio": null,
      "twitter_username": null,
      "public_repos": 6,
      "public_gists": 0,
      "followers": 1,
      "following": 2,
      "created_at": "2014-04-02T16:32:51Z",
      "updated_at": "2024-05-12T14:23:34Z"
    }

    app.get('/', (req, res) => {
      res.send('Hello World!')
    })

    app.get('/twitter', (req, res) => {
        res.send('dspygeek')
    })

    app.get ('/github', (req,res)=>{
      res.json(githubData)
    })

    //get a list of 5 jokes 
    app.get ('/api/jokes', (req, res) =>{
    const jokes = [
        {
          id: 1,
          title: "joke1",
          content: "This is joke 1"
        },
        {
          id: 2,
          title: "joke2",
          content: "This is joke 2"
        },
        {
          id: 3,
          title: "joke3",
          content: "This is joke 3"
        }
      ];
      res.send(jokes);
    });

    app.get('/login', (req,res) =>{
        res.send('<h1>Please login on twitter</h1>')
    })
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })