import { Http,Headers,RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  headers = new Headers({'Content-Type': 'application/json'});
  options = new RequestOptions({headers:this.headers});

  constructor(public http: Http) {

  }
  get_categories(){
    return this.http.get('http://192.168.1.8/showbox/get_categories.php',this.options)
    .map(rsp => rsp.json());
  }

  get_channels(id){
    return this.http.get('http://192.168.1.8/showbox/get_channels.php?id='+id,this.options)
    .map(rsp => rsp.json());
  }

}
