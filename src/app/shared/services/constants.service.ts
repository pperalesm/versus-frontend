import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConstantsService {
  public USERNAME_VALIDATION: string = '[a-zA-Z0-9]*';

  constructor() {}
}
