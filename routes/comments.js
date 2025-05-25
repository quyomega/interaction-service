const express = require('express');
const router = express.Router();
const { Comment } = require('../models/Interaction');

// Tạo comment
router.post('/', async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.json(comment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Lấy tất cả comment theo post_id
router.get('/:post_id', async (req, res) => {
  try {
    const comments = await Comment.findAll({
      where: { post_id: req.params.post_id },
      order: [['createdAt', 'ASC']]
    });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Cập nhật comment
router.put('/:id', async (req, res) => {
  try {
    const result = await Comment.update(req.body, {
      where: { id: req.params.id }
    });
    res.json({ updated: result[0] });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Xoá comment
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Comment.destroy({ where: { id: req.params.id } });
    res.json({ deleted });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
