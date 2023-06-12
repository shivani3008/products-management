import { TestBed } from '@angular/core/testing';

import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from './snackbar.service';

describe('SnackbarService', () => {
  let service: SnackbarService;
  let matSnackBar: MatSnackBar;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatSnackBar],
    });
    service = TestBed.inject(SnackbarService);
    matSnackBar = TestBed.inject(MatSnackBar);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
