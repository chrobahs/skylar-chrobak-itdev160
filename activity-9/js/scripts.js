var data=[
  {
    id: 1,
    title: 'Change in the Right Direction',
    body: 'Love the Life You Live, Live the Life You Love.',
    author: 'Bob Marley'
  },
  {
    id: 2,
    title:'Unplanned Joys',
    body:'Life is What Happens When You Are Making Other Plans',
    author:'John Lennon'
  },
  {
    id: 3,
    title:'Find Your Cause',
    body:'A Man Who Stands For Nothing Will Fall for Anything',
    author:'Malcom X'
  },
  {
    id: 4,
    title:'Self Assurance',
    body:'Everyone Deserves the Chance to Fly',
    author:'Wicked Witch of the West'
  },
  {
    id: 5,
    title:'Quality of Life',
    body:'Not How Long, but How Long You Lived is the Main Thing',
    author: 'Seneca'
  },
  {
    id: 6,
    title:'You Can Do Amazing Things',
    body:'You Only Live Once, but If You Do it Right, Once is Enough',
    author: 'Mae West'
  }
]
var $nav=$('$nav-container')
var $intro=$('#intro')
var $posts=$('#post-container')
function initPosts(){
  for(var j=0;j<data.length; j++){
    var postId='post-'+data[j].id,
    $post=$('<section class="post"></section>'),
    $title=$('<h2 class="title"></h2>'),
    $body=$('<p class="quote"></p>'),
    $body=$('<blockquote></blockquote>');
    ($author=$('<span class="author"></span>')), ($navItem=$('<li></li>'))
    $title.text(data[j].title)
    $body.text(data[j].body)
    $author.text(data[j].author)
    $navItem.attr('id', data[j].id)
    $navItem.text(data[j].title)
    $post.attr('id', postId)
    $post.append($title)
    $post.append($body)
    $post.append($author)
    $posts.append($post)
    $nav.append($navItem)
    $navItem.on('click', function(){
      var id=$(this).attr('id')
      $posts.children().hide()
      $posts.find('#post-'+id).fadeIn()
    })
    $posts.children('.post').hide()
    $intro.fadeIn(1000)
  }
}
initPosts()
