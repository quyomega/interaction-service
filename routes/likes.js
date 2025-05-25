const express = require('express');
const router = express.Router();
const { Like } = require('../models/Interaction');

// Like 
router.post('/', async (req, res) => {
  try {
    const like = await Like.create(req.body);
    res.json(like);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Unlike 
router.delete('/', async (req, res) => {
  const { user_id, post_id } = req.body;
  const deleted = await Like.destroy({ where: { user_id, post_id } });
  res.json({ deleted });
});

// Get 
router.get('/:post_id', async (req, res) => {
  const likes = await Like.findAll({ where: { post_id: req.params.post_id } });
  res.json(likes);
});

module.exports = router;
