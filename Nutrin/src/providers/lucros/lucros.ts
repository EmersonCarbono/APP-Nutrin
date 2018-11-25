import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LucrosProvider {

  base = "/nutrin_api";

  constructor(public http: HttpClient) {}

  public lucrosRead() {
    return this.http.get(this.base + "/lucros");
  }
}
