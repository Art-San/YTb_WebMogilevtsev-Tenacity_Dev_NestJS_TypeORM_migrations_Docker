import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	await app.listen(3000)
}
bootstrap()
// https://www.youtube.com/watch?v=MSMw6NO2dOo Оставил ссылку на видео
