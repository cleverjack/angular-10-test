import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

const baseUrl = "/api/";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  public getCustomers (page?: number, limit?: number) {
    let options = {
      take: limit ? limit : 0,
      skip: page && limit ? page*limit : 0
    }
    return this.http.post(baseUrl + "query/customers", options);
  }

  public getOrders (page?: number, limit?: number) {
    let options = {
      take: limit ? limit : 0,
      skip: page && limit ? page*limit : 0
    }
    return this.http.post(baseUrl + "query/orders", options);
  }
}
