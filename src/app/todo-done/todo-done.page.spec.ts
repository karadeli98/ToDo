import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TodoDonePage } from './todo-done.page';

describe('TodoDonePage', () => {
  let component: TodoDonePage;
  let fixture: ComponentFixture<TodoDonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoDonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TodoDonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
