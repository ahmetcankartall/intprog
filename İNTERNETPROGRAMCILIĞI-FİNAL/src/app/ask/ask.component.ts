import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Kayit } from '../models/kayit';
import { FbservisService } from '../services/fbservis.service';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent implements OnInit {
  secKayit:Kayit=new Kayit();

  constructor(
    public fbServis:FbservisService,
    public router : Router
  ) { }

  ngOnInit(): void {
  }
  Kaydet(){
    var user=JSON.parse(localStorage.getItem("user"));
    this.secKayit.uid=user.uid;
    var tarih=new Date();
    this.secKayit.kayTarih=tarih.getTime().toString();
    this.secKayit.duzTarih=tarih.getTime().toString();
    this.fbServis.KayitEkle(this.secKayit).then(d=>{
    this.router.navigate(['/']);
    });
  }

}
