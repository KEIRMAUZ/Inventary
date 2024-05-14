import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import {TypeOrmModule} from '@nestjs/typeorm'
import { ProductsModule } from './products/products.module';
import { RolesModule } from './roles/roles.module';
import { CategorysModule } from './categorys/categorys.module';
import { FaltantesModule } from './faltantes/faltantes.module';
import { PersonModule } from './person/person.module';

@Module({
  imports: [
  TypeOrmModule.forRoot({
    type: 'mysql',
    host:'localhost',
    port:3306,
    username: 'root',
    password:'',
    database:'inventario',
    entities:[__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true
  }),
  UsersModule,
  ProductsModule,
  RolesModule,
  CategorysModule,
  FaltantesModule,
  PersonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
