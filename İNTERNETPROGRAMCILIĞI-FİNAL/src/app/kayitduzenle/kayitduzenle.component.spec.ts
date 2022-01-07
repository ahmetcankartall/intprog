import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KayitduzenleComponent } from './kayitduzenle.component';

describe('KayitduzenleComponent', () => {
  let component: KayitduzenleComponent;
  let fixture: ComponentFixture<KayitduzenleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KayitduzenleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KayitduzenleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
