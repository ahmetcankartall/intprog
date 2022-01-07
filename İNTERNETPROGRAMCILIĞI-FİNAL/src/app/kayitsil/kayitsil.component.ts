import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Kayit } from '../models/kayit';
import { FbservisService } from '../services/fbservis.service';

@Component({
  selector: 'app-kayitsil',
  templateUrl: './kayitsil.component.html',
  styleUrls: ['./kayitsil.component.css']
})
export class KayitsilComponent implements OnInit {

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
    
    Sil(){
      this.fbServis.KayitSil(this.key).then(d=>{
        this.router.navigate(['/']);
      })
    }

}
