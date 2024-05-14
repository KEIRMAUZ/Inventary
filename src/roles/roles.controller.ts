import { Controller, Post, Body } from '@nestjs/common';
import { createRolDto } from './Dto/create-roles.dto';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
    constructor(private rolesService: RolesService){}

    @Post()
    createRol(@Body() newRol:createRolDto){
        return this.rolesService.createRol(newRol)
    }
}
