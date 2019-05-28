/** API routes for strings. */
const express = require('express');
const db = require('../db');

const router = new express.Router();

// GET all strings
// [ { id, body }, { id, body }... ]
// eslint-disable-next-line func-names
router.get('/', async function(req, res, next) {
  try {
    const result = await db.query(`SELECT * FROM strings`);
    return res.json(result.rows);
  } catch (err) {
    return next(err);
  }
});

// POST a string
// eslint-disable-next-line func-names
router.post('/', async function(req, res, next) {
  try {
    const { body } = req.body;
    const result = await db.query(
      `INSERT INTO strings (body)
                VALUES $1
                RETURNING id, body`,
      [body]
    );
    return res.status(201).json(result.rows[0]);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
