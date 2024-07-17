import express from 'express';

import {createHotel, updateHotel, deleteHotel, getHotel, getHotels } from '../controllers/hotelController.js';

/**
 * @swagger
 * /sample:
 *   get:
 *     summary: Returns a sample message
 *     responses:
 *       200:
 *         description: A successful response
 */
const router = express.Router();

// routes
router.post("/", createHotel)
router.put("/:id", updateHotel);
router.delete("/:id", deleteHotel);
router.get("/:id",getHotel);
router.get("/", getHotels);


export default router;