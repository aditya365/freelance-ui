import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Skill } from '../.././../core/models/skill.model';
import { SkillService } from 'src/app/core/services/skill/skill.service';
import { EventEmitter } from 'events';
import { DevelopersService } from 'src/app/core/services/developers/developers.service';
@Component({
  selector: 'app-developers-filter',
  templateUrl: './developers-filter.component.html',
  styleUrls: ['./developers-filter.component.scss']
})
export class DevelopersFilterComponent implements OnInit {
  filterForm: FormGroup;
  skills: Skill[];

  constructor(private skillService: SkillService,
    private developerService: DevelopersService
  ) { }

  ngOnInit() {
    this.initiateFilterForm();
    this.getSkills();
  }

  initiateFilterForm() {
    this.filterForm = new FormGroup({
      skills: new FormControl([]),
      minFee: new FormControl(0),
      maxFee: new FormControl(5000)
    });
  }

  getSkills() {
    this.skillService.get().subscribe(skills => this.skills = skills)
  }

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }

  filter() {
    this.developerService.updateFilters(this.filterForm.value);
  }

}
