import { type } from 'os'
import { Entity, Column, PrimaryColumn} from 'typeorm'
@Entity({name:'Person'})
export class Person {
    @PrimaryColumn({type:'int',unique:true})
    ID_person:number

    @Column({type:'int'})
    ID_roles:number

    @Column({type:'varchar'})
    name:string

    @Column({type:'varchar'})
    lastname:string

    @Column({type:'int'})
    phone:number

}