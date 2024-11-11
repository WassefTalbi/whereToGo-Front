import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReclamtionsComponent } from './my-reclamtions.component';

describe('MyReclamtionsComponent', () => {
  let component: MyReclamtionsComponent;
  let fixture: ComponentFixture<MyReclamtionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyReclamtionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyReclamtionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
