import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

//decorator that attaches metadata, which declares that PrismaService is a class that can be managed by the Nest IoC container.
@Injectable()
export class PrismaService extends PrismaClient
	implements OnModuleInit {

		async onModuleInit() {
			await this.$connect();
		}
	

	async enableShutdownHooks(app: INestApplication) {
		this.$on('beforeExit', async () => {
			await app.close();

		});

	}
}


//async function is a type of function that always returns a promise (an object to which we then use for other functions)

//await keyword just waits until the process behind it executes and then you continue


