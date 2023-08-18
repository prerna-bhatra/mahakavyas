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
     'mongodb+srv://prerna1998:mp9jG7boQpNfBRDd@cluster0.psnyapm.mongodb.net/maha-kavyas'
    ),

    MongooseModule.forFeature([
      { name: Puran.name, schema: PuranSchema },
    ])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
