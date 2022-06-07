import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { EMPTY, Observable } from 'rxjs';
import { AccountsService } from '../services/accounts.service';

@Injectable()
export class JwtTokenInterceptor implements HttpInterceptor {
  constructor(
    private accountsService: AccountsService,
    private router: Router,
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const jwtHelperService = new JwtHelperService();
    const token = localStorage.getItem('token');

    if (!token) {
      return next.handle(req);
    }

    if (
      jwtHelperService.isTokenExpired(token) &&
      req.url.includes('/graphql')
    ) {
      this.accountsService.logout();
      return EMPTY;
    }

    return next.handle(
      req.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      }),
    );
  }
}
