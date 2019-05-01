// var subscriptions = [];
alert("Hello Disney fanatics!");
// for (var i=0;i<=100;i++){
//
// }
var person = prompt("Please enter your name:","First Name & Last Name");
var email = prompt("Please enter your email for update:","disneylover@gmail.com");
alert("Thanks for subscribing "+person+". We will be sending you updates at "+email);
console.log(document.images);
var posts = [];
var postType = {
  admin: 'admin-post',
  sub: 'subscriber-post',
  anon: 'anon-post'
};

var data = [
  {
    type: postType.admin,
    name: 'Skylar',
    post: 'This is a safe place for Disney fans to post opinions of their favorite parks and talk about the pros and cons of the rides and what foods to try or miss.'},
  {
    type: postType.sub,
    name: 'Andrea',
    post: 'Can I just say how much I love Be Our Guest in the Magic Kingdom? The iconic Grey Stuff is INDEED delicious! I have to remember to ask the chef next time for the recipe so I can make it at home.'},
  {
    type: postType.anon,
    name: 'The Duck',
    post: 'Mickey fever is everywhere! This year is his 90th birthday and they have just about everything Mickey shaped! There are even Waffles with his face on them! Happy though because we have been friends forever.'
  }
];

function Post(type, name, post) {
  this.type = type;
  this.name = name;
  this.post = post;
}

function createPostElement(post) {
  var postText = document.createTextNode(
    post.name + ': ' + post.post
  );

  var postEl = document.createElement('div');
  postEl.appendChild(postText);
  postEl.className = post.type;
  return postEl;
}

function addPostHandler(event) {
  var name, type;

  var postInputEl = document.getElementById('post-input');
  var postContainerEl = document.getElementById('post-container');

  switch (event.target.id) {
    case 'comment-button':
      name = 'Skylar';
      type = messageType.admin;
      break;
    case 'new-button':
      name = 'Andrea';
      type = messageType.sub;
      break;
    default:
      name = 'Anonymous';
      type = messageType.anon;
      break;}

  if (postInputEl.value != '') {
    var post = new Post(type, name, postInputEl.value);
    posts.push(post);
    var el = createPostElement(post);
    postContainerEl.appendChild(el);
    postInputEl.value = '';
  }}

function init() {
  document.getElementById('post-button').onclick = addPostHandler;
  document.getElementById('comment-button').onclick = addPostHandler;
  var postContainerEl = document.getElementById('post-container');
  for (let j = 0; j < data.length; j++) {
    const item = data[j];
    var post = new Post(item.type, item.name, item.post);
    posts.push(post);
    var el = createPostElement(post);
    postContainerEl.appendChild(el);
  }
}

init();
