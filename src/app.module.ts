import { MiddlewareConsumer,  Module, NestModule } from '@nestjs/common';
import { PersonController } from './person/person.controller';
import { GlobalValidationPipe } from './global.pipes';
import { PersonService } from './person/services/person/person.service';
import { ExepleMiddleware } from './person/midlewares/exeple/exeple.middleware';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule.register({timeout: 500, maxRedirects: 5})],
  controllers: [PersonController],
  providers: [PersonService],
})
export class AppModule {
  
}

