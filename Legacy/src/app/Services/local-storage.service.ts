import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
// import { List } from '../Models/Ingredients';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {
  localStorage: Storage;
  // localStorage: LS[] = [List]
value = localStorage.getItem('LS');
  constructor(public fb: FormBuilder) {
    this.localStorage = window.localStorage;
  }
  // get(key: string): any {
  //   if (this.isLocalStorageSupported) {
  //     return JSON.parse(this.localStorage.getItem(key));
  //   }
  //   return null;
  // }
  // set(key: string, value: any): boolean {
  //   if (this.isLocalStorageSupported) {
  //     this.localStorage.setItem(key, JSON.stringify(value));
  //     return true;
  //   }
  //   return false;
  // }
  // remove(key: string): boolean {
  //   if (this.isLocalStorageSupported) {
  //     this.localStorage.removeItem(key);
  //     return true;
  //   }
  //   return false;
  // }
  // get isLocalStorageSupported(): boolean {
  //   return !!this.localStorage
  // }
}