import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OnecomponentPage } from './onecomponent.page';

describe('OnecomponentPage', () => {
  let component: OnecomponentPage;
  let fixture: ComponentFixture<OnecomponentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OnecomponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
