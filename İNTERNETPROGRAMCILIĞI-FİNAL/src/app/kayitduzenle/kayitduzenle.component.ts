import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Kayit } from '../models/kayit';
import { FbservisService } from '../services/fbservis.service';

@Component({
  selector: 'app-kayitduzenle',
  templateUrl: './kayitduzenle.component.html',
  styleUrls: ['./kayitduzenle.component.css']
})
export class KayitduzenleComponent implements OnInit {
key:string;
secKayit : Kayit= new Kayit();
constructor(
  public route:ActivatedRoute,
  public fbServis: FbservisService,
  public router: Router
) {}
  

  ngOnInit(): void {
    this.route.params.subscribe(p=>{
this.key = p.key;
this.KayitGetir();
    });
  }
  
  KayitGetir() {
    this.fbServis.KayitByKey(this.key).snapshotChanges().subscribe(data=>{
const y = {...data.payload.toJSON(), key: this.key };
this.secKayit=(y as Kayit);
    });
  }
Kaydet() {
  var tarih= new Date ();
  this.secKayit.duzTarih=tarih.getTime().toString();
  this.fbServis.KayitDuzenle(this.secKayit).then(d=>{
this.router.navigate(['/']);
  });



}


}
