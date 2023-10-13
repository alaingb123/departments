
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesModule } from './categories/categories.module';
import { DeparmentsModule } from './deparments/deparments.module';



@Module({
  imports: [  
    MongooseModule.forRoot('mongodb://localhost/categories'),
      UsersModule,
      AuthModule,
      CategoriesModule,
      DeparmentsModule,
     ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
