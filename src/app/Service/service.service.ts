import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Company } from '../Models/Company';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  constructor(private http:HttpClient) { }
  
  Url = 'https://localhost:7209/json/data/getCompanies';

  getCompaniesInfo() {
    return this.http.get<Company[]>(this.Url)
  }

}
