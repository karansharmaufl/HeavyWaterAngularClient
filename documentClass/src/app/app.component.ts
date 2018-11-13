import { Component } from '@angular/core';
import { WebserviceService } from './webservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  encodedTxt = ''


  postAndGet(){
    //console.log('I am here', this.encodedTxt);
    //console.log('TXT_HERE',encodedTxt);
    this.wbsc.postMessage(this.encodedTxt);
  }
  constructor(private wbsc : WebserviceService){}
}
