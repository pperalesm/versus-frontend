import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConstantsService {
  public USERNAME_VALIDATION: string = '[a-zA-Z0-9]*';
  public MIN_PASSWORD_LENGTH: number = 8;

  constructor() {}
}
