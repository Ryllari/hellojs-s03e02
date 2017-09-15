const axios = require("axios")

const api = axios.create({
  baseURL: "https://api.github.com"
})

api.get("/repos/seita-ifce/hello-js-v3/issues/2/comments").then(ret => {
    const mylist = ret.data.filter(comment => (comment.created_at < '2017-09-15T03:59:59Z') && comment.body.includes('hellojs-s03e02'))
    console.log("Comentou: ")
    mylist.forEach(c => {
        console.log(c.user.login)
    });
})
