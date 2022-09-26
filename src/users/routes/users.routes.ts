import express from "express";
import { CreateUsersController } from "../controller/CreateUserController";
import { GetUsersController } from "../controller/GetUsersController";
import { UsersRepository } from "../repositories/UsersRepository";
import { CreateUsersService } from "../services/CreateUserService";
import { GetUsersService } from "../services/GetUsersService";

export const usersRouter = express.Router();

const usersRepository = new UsersRepository();

const getUsersService = new GetUsersService(usersRepository);
const createUsersService = new CreateUsersService(usersRepository);

const getUsersController = new GetUsersController(getUsersService);
const createUsersController = new CreateUsersController(createUsersService);

usersRouter.get("/", getUsersController.handle);
usersRouter.post("/", createUsersController.handle);
