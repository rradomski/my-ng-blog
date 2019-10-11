import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  mainPageTitle = 'My super duper blog';
  baseUrl = 'http://localhost:4200/';

  constructor() {
  }
}
