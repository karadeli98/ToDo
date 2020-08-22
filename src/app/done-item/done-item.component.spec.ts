import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoneItemComponent } from './done-item.component';

describe('DoneItemComponent', () => {
  let component: DoneItemComponent;
  let fixture: ComponentFixture<DoneItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoneItemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoneItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
