import { Entity, Column, PrimaryColumn,PrimaryGeneratedColumn} from 'typeorm'

@Entity({name:'Roles'})
export class Roles{

    @PrimaryColumn({type:'int',unique:true})
    ID_roles:number

    @Column({type:'varchar',length:30})
    role_name:string

}