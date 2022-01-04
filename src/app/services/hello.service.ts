import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  currentLocale = 'de';

  messages = {
    fr: 'Bonjour',
    en: 'Hello',
    de: 'Halo',
    es: 'Hola'
  }

  constructor() { }

  greet() {
    return this.messages[this.currentLocale];
  }
}
