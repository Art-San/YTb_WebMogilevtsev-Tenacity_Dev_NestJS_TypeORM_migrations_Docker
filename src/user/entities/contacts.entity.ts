import { Base } from 'src/utils/base'
import { Column, Entity, OneToOne } from 'typeorm'
import { UserEntity } from './user.entity'

//https://progressivecoder.com/typeorm-entity-relations/
@Entity('Contacts')
export class ContactsEntity extends Base {
	@Column()
	contacts: number
}
