import { Entity, Column, PrimaryColumn,PrimaryGeneratedColumn} from 'typeorm'

@Entity({name:'Roles'})
export class Roles{

    @PrimaryGeneratedColumn({type:'int'})
    ID_roles:number

    @Column({type:'varchar',length:30})
    role_name:string

}