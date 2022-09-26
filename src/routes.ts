import express from "express";

export const router = express.Router();

const getUsersController = new GetUsersController();

router.get("/", getUsersController.handle);
