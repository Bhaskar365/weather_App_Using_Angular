import { Component , OnInit, OnDestroy } from '@angular/core';
import { ApiServiceService } from './service/api-service.service';
import { Subscription, interval, timeout } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  private randomDataSubscription!: Subscription;
  x:any;
  y:any;
  randomFakeData_API = "https://randomuser.me/api/";
  intervalTimeInMill = 2000;
  err:any;
  searchQuery:string = "";
  searchResults:any;
  time:any;
  formattedTime:any;

  constructor(private http:HttpClient, private serv:ApiServiceService,) { }

  ngOnInit() {  } 

  weatherData(location:string) {
    this.serv.getWeatherData(location).subscribe(res=>{
      this.searchResults = res;
      console.log(res);
      this.time = res;
      this.time = this.time.location.localtime;
      // console.log(this.time);
      this.formattedTime = new Date(this.time);
      // console.log(this.formattedTime);
      this.formattedTime = this.formattedTime.getHours();
      // console.log(this.formattedTime);
    });
  }



  // ngOnDestroy(){
  //   if(this.randomDataSubscription) {
  //     this.randomDataSubscription.unsubscribe();
  //   }
  // }

  // generateRandomData(){
  //   this.http.get<any>(this.randomFakeData_API).pipe(catchError((err:any)=>{
  //     console.log("Error : " + err);
  //     return []
  //   })).subscribe((res:any)=>{
  //     this.x = res;
  //     this.y = res.results;
  //     console.log(this.x);
  //     console.log(this.y);
  //   })
  // }

}
