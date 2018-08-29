import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPracticeComponent } from './project-practice.component';

describe('ProjectPracticeComponent', () => {
  let component: ProjectPracticeComponent;
  let fixture: ComponentFixture<ProjectPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
