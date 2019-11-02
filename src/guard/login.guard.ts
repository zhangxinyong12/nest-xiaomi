import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class LoginGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    // 获取cookie
    const cookie = req.signedCookies;
    // console.log(cookie.userId);

    // 获取session
    const session = req.session;
    console.log(session.userName);
    return true;
  }
}
