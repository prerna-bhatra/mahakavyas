import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PuranModule } from './puran/puran.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Puran, PuranSchema } from './puran/schemas/purans.schema';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { User, UserSchema } from './puran/schemas/users.schema';
import { JwtModule } from '@nestjs/jwt';
import { CommentService } from './comment/comment.service';
import { CommentController } from './comment/comment.controller';
import { Comment ,CommentSchema } from './puran/schemas/comments.model';
import { StoriesService } from './stories/stories.service';
import { StoriesController } from './stories/stories.controller';
import { Story, StorySchema } from './stories/schemas/stories.schema';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PuranModule,
    MongooseModule.forRoot(
     'mongodb+srv://prerna1998:mp9jG7boQpNfBRDd@cluster0.psnyapm.mongodb.net/maha-kavyas'
    ),
    JwtModule.register({
      secret: 'MAHAKVYASSECRETKEY'
      // signOptions: { expiresIn: '1h' }, // Adjust token expiration as needed
    }),
    MongooseModule.forFeature([
      { name: Puran.name, schema: PuranSchema },
      { name: User.name, schema: UserSchema },
      { name: Comment.name, schema: CommentSchema },
      { name: Story.name, schema: StorySchema },
    ])],
  controllers: [AppController, UserController, CommentController, StoriesController],
  providers: [AppService, UserService, CommentService, StoriesService],
})
export class AppModule { }
