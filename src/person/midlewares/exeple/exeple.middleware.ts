import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class ExepleMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('Executou Middleware')
    //console.log(req)
    console.log(res.Param.hea)
    next();
  }
}
