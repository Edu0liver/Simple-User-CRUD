import { CreateUserDTO } from "../dto/CreateUserDTO";
import { UsersRepository } from "../repositories/UsersRepository";

export class CreateUsersService {

    constructor(private usersRepository: UsersRepository) {}

    async execute({ name, email }: CreateUserDTO): Promise<void> {
        const userAlreadyExists = await this.usersRepository.findByEmail(email);

        if(userAlreadyExists) {
            throw new Error("User already exists!");
        }

        await this.usersRepository.create({ name, email });
    }

}