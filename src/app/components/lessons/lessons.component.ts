import { AfterViewInit, Component } from '@angular/core';
import {
  LearningObjective,
  LearningObjectivesData,
} from 'src/app/interfaces/learning-objectives-data';
import { MainServiceService } from 'src/app/services/main-service.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css'],
})
export class LessonsComponent implements AfterViewInit {
  learningObjectives: Array<LearningObjective> = new Array<LearningObjective>();

  constructor(private mainservice: MainServiceService) {}
  ngOnInit() {}
  ngAfterViewInit() {
    this.mainservice.getData().subscribe((learningObjectives) => {
      this.learningObjectives = learningObjectives.learningObjectives;
      this.updated();
    });
  }

  updated() {
    if (this.learningObjectives !== undefined) {
      console.log(this.learningObjectives);
    }
  }
}
