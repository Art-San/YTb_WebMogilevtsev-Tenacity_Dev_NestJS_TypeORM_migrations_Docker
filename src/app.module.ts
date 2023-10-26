import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { AppConfig, DatabaseConfig } from './config'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			cache: true,
			load: [AppConfig, DatabaseConfig],
		}),
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: (configService: ConfigService) => ({
				...configService.get('database'),
			}),
			inject: [ConfigService],
		}),
		UserModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}

// import { Module } from '@nestjs/common'
// import { TypeOrmModule } from '@nestjs/typeorm'
// import { UserModule } from './user/user.module'
import { UserModule } from './user/user.module';

// @Module({
// 	imports: [
// 		TypeOrmModule.forRoot({
// 			type: 'postgres',
// 			host: 'localhost',
// 			port: 5432,
// 			username: 'postgres',
// 			password: '8225991',
// 			database: 'migrations_with_TypeORM',
// 			entities: ['dist/**/*.entity{.js, .ts}'],
// 			synchronize: true,
// 			logging: true,
// 		}),
// 		UserModule,
// 	],
// 	controllers: [],
// 	providers: [],
// })
// export class AppModule {}
