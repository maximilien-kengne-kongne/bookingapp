import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/userController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router()

//UPDATE
/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update user by id.
 *     description: Update the details of user by providing the user id.
 *     tags: [UserController]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The id of the user to be updated.
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Updated user information
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               dateOfBirth:
 *                 type: string
 *                 format: date
 *               gender:
 *                 type: string
 *               phoneNum:
 *                 type: integer
 * 
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The user ID.
 *                       example: 0
 *                     name:
 *                       type: string
 *                       description: The user's name.
 *                       example: Leanne Graham
*/
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET
 /**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Retrieve a single JSONPlaceholder user.
 *     description: Retrieve a single JSONPlaceholder user. Can be used to populate a user profile when prototyping or testing an API.
  *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The user ID.
 *                       example: 0
 *                     name:
 *                       type: string
 *                       description: The user's name.
 *                       example: Leanne Graham
*/
router.get("/:id", verifyUser, getUser);

//GET ALL
 /**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve all JSONPlaceholder users.
 *     description: Retrieve all JSONPlaceholder users. Can be used to populate a user list when prototyping or testing an API.
 *     responses:
 *       200:
 *         description: An array of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The user ID.
 *                     example: 0
 *                   name:
 *                     type: string
 *                     description: The user's name.
 *                     example: Leanne Graham
*/
router.get("/", verifyAdmin, getUsers);

export default router;
