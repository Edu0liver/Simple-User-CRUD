import { Request, Response } from "express"
import { GetUsersService } from "../services/GetUsersService";

export class GetUsersController {

    constructor(private getUsersService: GetUsersService) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const users = await this.getUsersService.execute();

        return response.status(201).json(users);
    }

}