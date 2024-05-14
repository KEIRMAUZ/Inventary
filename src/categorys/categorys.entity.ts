import { Column, Entity,PrimaryColumn } from 'typeorm'

@Entity({name:'Categorys'})
export class Categorys {
    @PrimaryColumn({type:'int',unique:true})
    ID_category:number

    @Column({type:'varchar',length:30})
    name_category:string
}