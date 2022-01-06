const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    console.log("hoist me papi");
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newComment);
    } catch (err) {
        res.status(500).json(err);
    }
});

// router.get('/comment', withAuth, async (req, res) => {
//     console.log("TACOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO");
//     try {
//       const commentData = await Comment.create(req.params.id, {
//         include: [
//           {
//             model: User,
//             attributes: ['name'],
//           },
//         ],
//       });
  
//       const comment = commentData.get({ plain: true});
  
//       res.render('comment', {
//         ...comment,
//         logged_in: req.session.logged_in
//       });
//     } catch (err) {
//       res.status(500).json(err);
//     };
//   });


module.exports = router;