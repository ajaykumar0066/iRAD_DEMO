import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirComponent } from './fir.component';

describe('FirComponent', () => {
  let component: FirComponent;
  let fixture: ComponentFixture<FirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
