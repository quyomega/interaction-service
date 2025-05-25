const express = require('express');
const router = express.Router();
const { Share } = require('../models/Interaction');

// Tạo chia sẻ
router.post('/', async (req, res) => {
  try {
    const share = await Share.create(req.body);
    res.json(share);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Lấy danh sách người chia sẻ theo post_id
router.get('/:post_id', async (req, res) => {
  try {
    const shares = await Share.findAll({ where: { post_id: req.params.post_id } });
    res.json(shares);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
