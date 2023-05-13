import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  LearningObjective,
  LearningObjectivesData,
} from '../interfaces/learning-objectives-data';

@Injectable({
  providedIn: 'root',
})
export class MainServiceService {
  constructor(private http: HttpClient) {}

  getData(): Observable<LearningObjectivesData> {
    return this.http.get<LearningObjectivesData>('assets/data.json');
  }
}
