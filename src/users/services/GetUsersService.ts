import { User } from "../model/User";
import { UsersRepository } from "../repositories/UsersRepository";

export class GetUsersService {

    constructor(private usersRepository: UsersRepository) {}

    async execute(): Promise<User[]> {
        return await this.usersRepository.list();
    }

}