import { CreateUserDTO } from "../dto/CreateUserDTO";
import { User } from "../model/User";

export class UsersRepository {

    private users: User[];

    constructor() {
        this.users = [];
    }

    async create({ name, email }: CreateUserDTO): Promise<void> {
        const user = new User(name, email);

        Object.assign(user, {
            name,
            email
        });

        this.users.push(user);
    }

    async findByEmail(email: string): Promise<User | undefined> {
        const user = this.users.find(user => user.email === email);

        return user;
    }

    async list(): Promise<User[]> {
        return this.users;
    }

}