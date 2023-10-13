import { Module } from '@nestjs/common';
import { DeparmentsService } from './deparments.service';
import { DeparmentsController } from './deparments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import DeparmentSchema from './schemas/deparment.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'deparment', schema: DeparmentSchema}
    ])],
  controllers: [DeparmentsController],
  providers: [DeparmentsService],
  exports: [DeparmentsService],
})
export class DeparmentsModule {}
