import { Injectable } from '@angular/core';

@Injectable()
export class authService {
  public Email: string;
  public Role: string;
  public firstName: string;

  constructor() {
    this.Email = "";
    this.Role = "";
    this.firstName = "";
  }

  setMail(data) {
    this.Email = data;
  }
  setRole(data) {
    this.Role = data;
  }
  setfirstName(data) {
    this.firstName = data;
  }
  getMail() {
    return this.Email;
  }
  getRole() {
    return this.Role;
  }
  getfirstName() {
    return this.firstName;
  }
}
