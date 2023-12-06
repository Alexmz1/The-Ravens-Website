import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NousDecouvrirComponent } from './nous-decouvrir.component';

describe('NousDecouvrirComponent', () => {
  let component: NousDecouvrirComponent;
  let fixture: ComponentFixture<NousDecouvrirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NousDecouvrirComponent]
    });
    fixture = TestBed.createComponent(NousDecouvrirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
