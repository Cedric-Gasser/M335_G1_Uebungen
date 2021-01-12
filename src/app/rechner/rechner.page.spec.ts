import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RechnerPage } from './rechner.page';

describe('RechnerPage', () => {
  let component: RechnerPage;
  let fixture: ComponentFixture<RechnerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechnerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RechnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
