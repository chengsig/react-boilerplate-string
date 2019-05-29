/** API routes for strings. */
const express = require('express');
// const bodyParser = require('body-parser');
// const urlencodedParser = bodyParser.urlencoded({ extended: false });
const db = require('../db');

const router = new express.Router();

// GET all strings
// [ { id, body }, { id, body }... ]
router.get('/', async (req, res, next) => {
  try {
    const result = await db.query(`SELECT * FROM strings`);
    return res.json(result.rows);
  } catch (err) {
    return next(err);
  }
});

// POST a string
router.post('/', async (req, res, next) => {
  try {
      console.log('what is body', req.body)
    const result = await db.query(
      `INSERT INTO strings (body)
                VALUES ($1)
                RETURNING id, body`,
      [req.body.string],
    );
    return res.status(201).json(result.rows[0]);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
