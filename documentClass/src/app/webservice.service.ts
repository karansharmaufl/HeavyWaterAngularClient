import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebserviceService {
  
  constructor(private http : HttpClient) { }



  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };


  uBASE_URL = 'https://uulsqh4epl.execute-api.us-east-1.amazonaws.com/dev/';

  async postMessage(txt){
    //console.log('TEXT', txt);
    try{
        var response = await this.http.post(this.uBASE_URL, {"data":txt}).toPromise();
        console.log('POSTRESPONSE',response);
        //this.dtvizmessages.push(dtm);  // Adding data instantly -- adding using signalr
    }catch(error){
        console.log("An error occured",error);
    }
}
  

}
