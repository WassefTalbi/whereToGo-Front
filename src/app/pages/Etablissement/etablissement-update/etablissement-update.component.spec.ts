import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtablissementUpdateComponent } from './etablissement-update.component';

describe('EtablissementUpdateComponent', () => {
  let component: EtablissementUpdateComponent;
  let fixture: ComponentFixture<EtablissementUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtablissementUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EtablissementUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
