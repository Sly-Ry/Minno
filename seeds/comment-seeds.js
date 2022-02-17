const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Chicken is so good.',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: "That's awesome!",
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'So cool!',
    user_id: 3,
    post_id: 10
  },
  {
    comment_text: 'i wish that was me.',
    user_id: 3,
    post_id: 18
  },
  {
    comment_text: 'bet!',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'OMG rewatch plz XD',
    user_id: 1,
    post_id: 20
  },
  {
    comment_text: 'this sucks ass',
    user_id: 6,
    post_id: 7
  },
  {
    comment_text: 'gg!',
    user_id: 7,
    post_id: 4
  },
  {
    comment_text: "I've seen better stuff on Youtube tbh",
    user_id: 6,
    post_id: 12
  },
  {
    comment_text: 'Boooooooo!!!',
    user_id: 6,
    post_id: 20
  },
  {
    comment_text: 'Reminds me of my dog. <3',
    user_id: 3,
    post_id: 14
  },
  {
    comment_text: 'So cute!!',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text: 'a vibe fr fr',
    user_id: 4,
    post_id: 9
  },
  {
    comment_text:
      'plz post more! love ur stuff!',
    user_id: 5,
    post_id: 14
  },
  {
    comment_text: 'i know what you did last summer, jack',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'MORE MORE MORE! ',
    user_id: 8,
    post_id: 2
  },
  {
    comment_text:
      'this was good record that makes my happy',
    user_id: 2,
    post_id: 20
  },
  {
    comment_text: 'noice',
    user_id: 4,
    post_id: 11
  },
  {
    comment_text: "it's brings my heart joy to know that u are making quality content such as this. i hope u have a great day today!",
    user_id: 5,
    post_id: 13
  },
  {
    comment_text:
      'weeeeeeeeeeeeeeeeeaaaaaaaaaaak',
    user_id: 9,
    post_id: 16
  },
  {
    comment_text: 'Gotta show my mom this',
    user_id: 6,
    post_id: 4
  },
  {
    comment_text: 'good stuff im seeing',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'I hope ur doing ok these days',
    user_id: 3,
    post_id: 8
  },
  {
    comment_text:
      'What time is it where u live? i think',
    user_id: 8,
    post_id: 10
  },
  {
    comment_text:
      'can i ask u a question? just did',
    user_id: 1,
    post_id: 15
  },
  {
    comment_text: 'im assuming ur a leo',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: "what's your sign, homie?",
    user_id: 1,
    post_id: 15
  },
  {
    comment_text: 'YO',
    user_id: 4,
    post_id: 16
  },
  {
    comment_text: 'how can u say that about the economy? its not as bad ppl are saying it is',
    user_id: 4,
    post_id: 18
  },
  {
    comment_text: 'better to be safe than sorry',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'Guess what? Butt!',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'anime is actually preety cool',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: "what's ur mom's number lol",
    user_id: 3,
    post_id: 19
  },
  {
    comment_text: 'FAKE',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'FAKE',
    user_id: 10,
    post_id: 14
  },
  {
    comment_text: 'like what im seeing!',
    user_id: 10,
    post_id: 8
  },
  {
    comment_text: 'somebody must be hungry',
    user_id: 10,
    post_id: 11
  },
  {
    comment_text: 'my bf says the same thing lol',
    user_id: 8,
    post_id: 5
  },
  {
    comment_text: 'First!',
    user_id: 8,
    post_id: 19
  },
  {
    comment_text: 'Anybody wanna play some cod sometime?',
    user_id: 9,
    post_id: 19
  },
  {
    comment_text: "if u want some real advice, i know a great therapist who also owns a pizzeria. his name's howard and he's a really great doctor! worked wonders on me and my husband with our divorce",
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:
      'ima bastion main',
    user_id: 2,
    post_id: 11
  },
  {
    comment_text: 'hahahahahahahalmaolololololo',
    user_id: 4,
    post_id: 6
  },
  {
    comment_text: 'i disagree and that is all.',
    user_id: 9,
    post_id: 6
  },
  {
    comment_text: 'hahaha!!!!!!',
    user_id: 7,
    post_id: 9
  },
  {
    comment_text: 'call me sometime (123)456-7890) ;)',
    user_id: 4,
    post_id: 19
  },
  {
    comment_text: 'que onda guey',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text:
      "Life is like a box of chocolates is what my mom told me when i was a wee lad. but is ur case, life is like a box of dynamite. y? cuz u da bomb. ;)",
    user_id: 2,
    post_id: 19
  },
  {
    comment_text: 'Gross',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'Have a good time on the site!',
    user_id: 10,
    post_id: 12
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;