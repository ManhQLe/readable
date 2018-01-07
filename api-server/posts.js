const clone = require('clone')
const uuidv4 = require('uuid/v4')
const config = require('./config')
let db = {}

const defaultData = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    timestamp: 1513403153,
    title: 'Udacity is the best place to learn React',
    body: 'Everyone says so after all.',
    author: 'Manh Le',
    category: 'react',
    voteScore: 6,
    mediaType:"image",
    mediaUrl:config.origin +"/public/patt (3).jpg",
    deleted: false,
    commentCount: 2
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    timestamp: 1513403153,
    title: 'Learn Redux in 10 minutes!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    author: 'Manh Le',
    category: 'redux',
    mediaType:"image",
    mediaUrl:config.origin +"/public/patt (4).jpg",
    voteScore: -5,
    deleted: false,
    commentCount: 0
  },
  "6ni6ok3ym7mf1p33lnxe": {
    id: '6ni6ok3ym7mf1p33lnxe',
    timestamp: 1513730380,
    title: 'Getting started with React & Redux',
    body: 'This is an introduction to react and redux.',
    author: 'Manh Le',
    category: 'redux',
    mediaType:"image",
    mediaUrl:config.origin +"/public/patt (2).png",
    voteScore: 2,
    deleted: false,
    commentCount: 0
  }
}

function getData (token) {
  let data = db[token]
  if (data == null) {
    data = db[token] = clone(defaultData)
  }
  return data
}

function getByCategory (token, category) {
  return new Promise((res) => {
    let posts = getData(token)
    let keys = Object.keys(posts)
    let filtered_keys = keys.filter(key => posts[key].category === category && !posts[key].deleted)
    res(filtered_keys.map(key => posts[key]))
  })
}

function get (token, id) {
  return new Promise((res) => {
    const posts = getData(token)
    res(
      posts[id].deleted
        ? {}
        : posts[id]
    )
  })
}

function getAll (token) {
  return new Promise((res) => {
    const posts = getData(token)
    let keys = Object.keys(posts)
    let filtered_keys = keys.filter(key => !posts[key].deleted)
    res(filtered_keys.map(key => posts[key]))
  })
}

function add (token, post) {
  return new Promise((res) => {
    let posts = getData(token);    
    const id = uuidv4();
    
    posts[id] = {
      id: id,
      timestamp: Math.floor(Date.now()/1000),
      title: post.title,
      body: post.body,
      author: post.author,
      category: post.category,
      mediaType:post.mediaType,
      mediaUrl:post.mediaUrl,
      voteScore: 0,
      deleted: false,
      commentCount: 0
    }

    res(posts[id])
  })
}

function vote (token, id, option) {
  return new Promise((res) => {
    let posts = getData(token)
    post = posts[id]
    switch(option) {
        case "upVote":
            post.voteScore = post.voteScore + 1
            break
        case "downVote":
            post.voteScore = post.voteScore - 1
            break
        default:
            console.log(`posts.vote received incorrect parameter: ${option}`)
    }
    res(post)
  })
}

function disable (token, id) {
    return new Promise((res) => {
      let posts = getData(token)
      posts[id].deleted = true
      res(posts[id])
    })
}

function edit (token, id, post) {
    return new Promise((res) => {
        let posts = getData(token)
        for (prop in post) {
            posts[id][prop] = post[prop]
        }
        res(posts[id])
    })
}

function incrementCommentCounter(token, id, count) {
  const data = getData(token)
  if (data[id]) {
    data[id].commentCount += count
  }
}

module.exports = {
  get,
  getAll,
  getByCategory,
  add,
  vote,
  disable,
  edit,
  getAll,
  incrementCommentCounter
}
