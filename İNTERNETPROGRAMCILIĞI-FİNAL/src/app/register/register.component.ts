import { Uye } from './../models/uye';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sonuc } from '../models/sonuc';
import { FbservisService } from '../services/fbservis.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  sonuc: Sonuc = new Sonuc();
  secUye: Uye = new Uye();


  constructor(
    public fbServis:FbservisService,
    public router : Router
  ) { }

  ngOnInit(): void {
  }
  KayitYap() {
    this.fbServis.UyeOl(this.secUye).then(d =>{
      d.user.updateProfile({
        displayName:this.secUye.adsoyad
      }).then();
      this.secUye.uid=d.user.uid;
      localStorage.setItem("user", JSON.stringify(d.user));
      this.UyeEkle();

    },err => {
      this.sonuc.islem=false;
      this.sonuc.mesaj="Hata Oluştu!";
    });

  }
  UyeEkle(){
  this.fbServis.UyeEkle(this.secUye).then(d=>{
    this.router.navigate(['/']);
  });
  }
  
}
