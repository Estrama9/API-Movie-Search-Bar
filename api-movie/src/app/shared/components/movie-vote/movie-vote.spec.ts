import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieVote } from './movie-vote';

describe('MovieVote', () => {
  let component: MovieVote;
  let fixture: ComponentFixture<MovieVote>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieVote]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieVote);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
