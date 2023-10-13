import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import CategorySchema from './schemas/categorie.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { DeparmentsService } from 'src/deparments/deparments.service';
import { DeparmentsModule } from 'src/deparments/deparments.module';

@Module({
  imports: [
    DeparmentsModule,
    MongooseModule.forFeature([
      {name: 'category', schema: CategorySchema}
    ])],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
