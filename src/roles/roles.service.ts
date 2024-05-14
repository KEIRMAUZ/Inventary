import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Roles} from './roles.entity';
import { Repository } from 'typeorm';
import {createRolDto} from './Dto/create-roles.dto'

@Injectable()
export class RolesService {
    constructor(@InjectRepository(Roles) private rolesRepository:Repository<Roles>){

    }

    createRol (name:createRolDto) {
        const newRol = this.rolesRepository.create(name)
        return this.rolesRepository.save(newRol)

    }

}