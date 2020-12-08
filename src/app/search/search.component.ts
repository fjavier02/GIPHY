import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GiphyService } from '../giphy.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  users:any = [];
  listgifs: any = [];
  dato: string ;
  select: any ;
  userMessagemInput = document.getElementById("formDatos")
  constructor(private list: GiphyService, private ruta: ActivatedRoute) { 

   
    
  }
  
  busca(dato,select) {
    dato = document.querySelector('#infoSearch');
    select = document.querySelector('#select');
     
    document.getElementById("search").addEventListener("submit", event => {
    event.preventDefault();
    
    
    })
    
    this.list.searchServ(dato.value,select.value).subscribe(listgifs => {this.listgifs = listgifs})
    
    dato.value=""
  }

  obterDato(){ 
    
    
  }

  
  ngOnInit(): void {
  }

}
