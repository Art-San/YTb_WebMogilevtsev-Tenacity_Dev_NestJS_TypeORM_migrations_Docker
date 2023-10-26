import { Base } from 'src/utils/base'
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { ContactsEntity } from './contacts.entity'

@Entity('User')
export class UserEntity extends Base {
	@Column({ unique: true })
	email: string

	@Column({ unique: true })
	fullName: string

	@Column({ default: true })
	isActive: boolean

	@OneToOne(() => ContactsEntity, {cascade: true})
	@JoinColumn()
	contact: ContactsEntity;
}
