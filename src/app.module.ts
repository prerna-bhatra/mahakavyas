import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PuranModule } from './puran/puran.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Puran, PuranSchema } from './puran/schemas/purans.schema';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PuranModule,
    MongooseModule.forRoot(
      process.env.MONGODB_URL
    ),

    MongooseModule.forFeature([
      { name: Puran.name, schema: PuranSchema },
    ])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
