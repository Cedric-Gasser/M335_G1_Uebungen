import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DataBindingPage } from './data-binding.page';

describe('DataBindingPage', () => {
  let component: DataBindingPage;
  let fixture: ComponentFixture<DataBindingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBindingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DataBindingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
