import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private baseUrl = 'http://192.168.49.2/api/food/';

  constructor(private http: HttpClient) {}

  getAvailableFood(): Observable<any> {
    return this.http.get(`${this.baseUrl}/available`);
  }

  orderFood(item: string, quantity: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/order`, { item, quantity });
  }
}