import { IsEmail, IsString } from 'class-validator'

//UserDto описываем данные которые приходят из вне на обновление и создание
export class CreateUserDto {
	@IsEmail()
	email: string

	@IsString()
	fullName: string

	isActive: boolean
}
