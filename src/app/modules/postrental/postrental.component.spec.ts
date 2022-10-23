import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostrentalComponent } from './postrental.component';

describe('PostrentalComponent', () => {
  let component: PostrentalComponent;
  let fixture: ComponentFixture<PostrentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostrentalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostrentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
