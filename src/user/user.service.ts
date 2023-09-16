import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import * as bcrypt from 'bcrypt';
import { User, UserSchema } from 'src/puran/schemas/users.schema';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class UserService {
    constructor(@InjectModel('User') private userModel: Model<User>,
        private jwtService: JwtService) { }

    async createUser(name: string, email: string, password: string): Promise<any> {
        console.log("create ");

        if (name.trim().length <= 0 || email.trim().length <= 0 || !password.trim().length) {
            return {
                success: false,
                error: "invalid request"
            }
        }

        const isExistEmail = await this.userModel.findOne({ email })

        console.log({ isExistEmail });


        if (isExistEmail) {
            return {
                success: false,
                error: "Already Exists email"
            }
        }

        const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
        const user = new this.userModel({ email, password: hashedPassword, name });
        const userSave = user.save();

        return {
            success: true,
            data: userSave
        }
    }

    async findUserByEmail(email: string): Promise<User | null> {
        return this.userModel.findOne({ email }).exec();
    }

    async login(email: string, password: string) {

        const isExistEmail = await this.userModel.findOne({ email })

        console.log({ isExistEmail, password, savedp: isExistEmail.password });


        if (!isExistEmail) {
            return {
                success: false,
                error: "User does not exists"
            }
        }
        const comparePassword = await bcrypt.compare(password, isExistEmail.password);

        console.log({ comparePassword });

        if (!comparePassword) {
            return {
                success: false,
                error: "Wrong password"
            }
        }
        const token = await this.generateJwtToken(email);
        return {
            success: true,
            data: token
        }

    }

    async generateJwtToken(email: string): Promise<string> {
        const payload = { email };
        return this.jwtService.sign(payload);
    }

    // async validatePassword(user: User, password: string): Promise<boolean> {
    //     return bcrypt.compare(password, user.password);
    // }
}
