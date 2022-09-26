import { Request, Response } from "express"
import { CreateUsersService } from "../services/CreateUserService";

export class CreateUsersController {

    constructor(private createUsersService: CreateUsersService) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email } = request.body;

        await this.createUsersService.execute({ name, email });

        return response.status(201).send();
    }

}