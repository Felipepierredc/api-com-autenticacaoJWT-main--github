import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {

    private readonly users = [
        {
            userId: 1,
            username: 'john',
            password: 'admin',
            email: 'john@user.com'
        },
        {
            userId: 2,
            username: 'maria',
            password: 'secret',
            email: 'maria@user.com'
        },
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}
