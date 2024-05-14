import { Column, Entity,PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm'
@Entity({name:'Faltantes'})
export class Faltante{

    @PrimaryGeneratedColumn({type:'int'})
    ID_faltantes:number

    @Column({type:'int'})
    ID_folio:number
}