import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zonelesscomp } from './zonelesscomp';

describe('Zonelesscomp', () => {
  let component: Zonelesscomp;
  let fixture: ComponentFixture<Zonelesscomp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Zonelesscomp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Zonelesscomp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
