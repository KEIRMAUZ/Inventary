import { Column, Entity,PrimaryColumn } from 'typeorm'
@Entity({name:'Faltantes'})
export class Faltante{

    @PrimaryColumn({type:'int',unique:true})
    ID_faltantes:number

    @Column({type:'int'})
    ID_folio:number
}