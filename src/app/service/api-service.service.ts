import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  a:any;
  b:any;
  c:any;
  data:any;

  // baseUrl = "https://api.opensensemap.org/boxes?model=homeWifi";
  // randomFakeData_API = "https://randomuser.me/api/";
  // coinbaseAPI = "https://api.coincap.io/v2/assets";
  // coinbase_API_KEY = "60e33680-4fbe-464c-b730-5a53b825cb0d";
  // weatherAPI = "http://api.weatherapi.com/v1/current.json?key=1534b7c751f14532a11145608231110&q=India&aqi=no";

  constructor(private http:HttpClient) { }


  getWeatherData(location:string){
    return this.http.get(`http://api.weatherapi.com/v1/current.json?key=1534b7c751f14532a11145608231110&q=${location}&aqi=no`)
  }

  // getCryptoData(){
  //   return this.http.get(this.coinbaseAPI);
  // }

  // getAllData(){
  //   return this.http.get<any>(this.baseUrl).pipe(catchError((err:any)=>
  //   {
  //     return err;
  //   }))
  // };

  // getRandomData(){
  //   this.data =  this.http.get<any>(this.randomFakeData_API).pipe(catchError((err:any)=>
  //   {
  //     return err;
  //   }))
  //   return this.data;
  // };

  // value$:Subject<any> = new Subject<any>();

  // getNewData() 
  // {
  //     this.value$ = this.data;
  //     return this.value$;
  // }



}
