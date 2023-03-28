import { TestBed } from '@angular/core/testing';

import { NoteaddService } from './noteadd.service';

describe('NoteaddService', () => {
  let service: NoteaddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteaddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
