import { Module } from '@nestjs/common';
import { CategorysService } from './categorys.service';
import { CategorysController } from './categorys.controller';

@Module({
  providers: [CategorysService],
  controllers: [CategorysController]
})
export class CategorysModule {}
