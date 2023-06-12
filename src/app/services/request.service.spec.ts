import { TestBed } from '@angular/core/testing';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RequestService } from './request.service';

describe('RequestService', () => {
  let service: RequestService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient],
      imports: [HttpClientModule],
    });
    service = TestBed.inject(RequestService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
