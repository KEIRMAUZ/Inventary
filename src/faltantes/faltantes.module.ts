import { Module } from '@nestjs/common';
import { FaltantesService } from './faltantes.service';
import { FaltantesController } from './faltantes.controller';

@Module({
  providers: [FaltantesService],
  controllers: [FaltantesController]
})
export class FaltantesModule {}
