import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler';

@Injectable()
export class InterInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const jwtToken = localStorage.getItem("token");
    console.log(jwtToken);
    
    if (jwtToken) {
      const cloned = request.clone({
          headers: request.headers.set("Authorization",
              "Bearer " + jwtToken)
      });

      return next.handle(cloned);
  }



    return next.handle(request);
  }
}
