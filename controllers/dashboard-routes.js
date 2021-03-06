const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

// GET all POST route
router.get('/', withAuth, (req, res) => {
    console.log(req.session);
    console.log('=======================');
    Post.findAll({
        where: { user_id: req.session.user_id },
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                  model: User,
                  attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard', { posts, loggedIn: true });
        console.log(posts);
        console.log("You're logged in!")
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET edit Post route
router.get('/edit/:id', (req, res) => {
    Post.findOne({
        where: { id: req.params.id},
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {
        const post = dbPostData.get({ plain:true });

        res.render('edit-post', {
            post,
            loggedIn: true
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;