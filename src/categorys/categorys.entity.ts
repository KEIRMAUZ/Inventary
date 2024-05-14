import { Column, Entity,PrimaryColumn,PrimaryGeneratedColumn } from 'typeorm'

@Entity({name:'Categorys'})
export class Categorys {
    @PrimaryGeneratedColumn({type:'int',unique:true})
    ID_category:number

    @Column({type:'varchar',length:30})
    name_category:string
}