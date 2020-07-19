import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllWordComponent } from './all-word.component';

describe('AllWordComponent', () => {
  let component: AllWordComponent;
  let fixture: ComponentFixture<AllWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllWordComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
