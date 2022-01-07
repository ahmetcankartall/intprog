import { FbservisService } from './../services/fbservis.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Kayit } from '../models/kayit';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  adsoyad:string;
   uid:string;
   kayitlar:Kayit[];
  constructor(
    public fbServis:FbservisService,
    public router : Router
    ) {  }

  ngOnInit(): void {
    var user=JSON.parse(localStorage.getItem("user"));
    this.uid=user.uid;
    this.adsoyad=user.displayName;
    this.KayitListele();
  }

  OturumKapat(): void{
    this.fbServis.OturumKapat() 
      localStorage.removeItem("user");
      this.router.navigate(['/login']);
    };
    


   KayitListele(){
   this.fbServis.KayitListele().snapshotChanges().subscribe(data=>{
    this.kayitlar = [];
    data.forEach(satir =>{
      const y={...satir.payload.toJSON(),key:satir.key};
      this.kayitlar.push(y as Kayit);
    });
   });
   }
}
