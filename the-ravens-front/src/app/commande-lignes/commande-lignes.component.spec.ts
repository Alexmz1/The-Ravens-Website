import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeLignesComponent } from './commande-lignes.component';

describe('CommandeLignesComponent', () => {
  let component: CommandeLignesComponent;
  let fixture: ComponentFixture<CommandeLignesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommandeLignesComponent]
    });
    fixture = TestBed.createComponent(CommandeLignesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
