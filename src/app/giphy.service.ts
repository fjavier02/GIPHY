import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  search: any = []
  key: any = "?api_key=fZAv4viiBsBI2lYtMi8M4pcvkLDA8aKO"

  constructor(private http: HttpClient) { }
  searchServ(data,select) {
    let apiUrl = 'https://api.giphy.com/v1/'+select+'/search'+this.key+"&q="+data+'&limit=24';
    /* console.log(apiUrl) */;
    return this.http.get(apiUrl); 
  } 
 
}


