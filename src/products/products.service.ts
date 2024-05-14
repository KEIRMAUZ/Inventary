import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Products} from './products.entity'
import { Repository } from 'typeorm';
@Injectable()
export class ProductsService {
    constructor(@InjectRepository(Products) private productsRepository: Repository<Products>){

    }
}
