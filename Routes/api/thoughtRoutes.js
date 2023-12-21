const router = require('express').Router();

const {
    getAllThoughts,
    getSingleThoughtById,
    createThought,
    updateThoughtById,
    deleteThoughtById,
    createReaction,
    removeReaction

} = require('../../controllers/thoughtControllers.js');

// /api/thoughts
router.route("/")
    .get(getAllThoughts)

// /api/thoughts/:thoughtsId
router
    .route("/:thoughtId")
    .get(getSingleThoughtById)
    .put(updateThoughtById)
    .delete(deleteThoughtById);

router.route("/newThought/:userId")
    .post(createThought);


router
    .route('/:userId/newReaction/:thoughtId')
    .post(createReaction);

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;