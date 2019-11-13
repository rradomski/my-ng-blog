import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  mainPageTitle = 'My blog';
  baseUrl = 'http://localhost:4200/';

  constructor() {
  }
}
