import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import UserEditableProfile from './UserEditableProfile.model';
import { UserService } from 'src/app/core/services/user/user.service';
import { FormErrorStateMatcher } from 'src/app/core/matchers/error-state.matcher';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Skill } from 'src/app/core/models/skill.model';
import { SkillService } from 'src/app/core/services/skill/skill.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  profile:Observable<UserEditableProfile>;
  skills:Observable<Skill[]>;
  profileForm: FormGroup;
  matcher = new FormErrorStateMatcher();
  constructor(private fb: FormBuilder, private userService: UserService,
    private skillService:SkillService) { }

  ngOnInit() {
    this.createProfileForm();
    this.getSkills();
  }

  createProfileForm() {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobile: ['', Validators.required],
      shortDescription: ['', Validators.required],
      summary: ['', Validators.required],
      skills: [[], Validators.minLength(1)]
    })

    this.profile = this.userService.getFullProfile().pipe(
      tap(profile => this.profileForm.patchValue(profile))
    );   
  }
  get form() { return this.profileForm.controls; }

  getSkills(){
    this.skills = this.skillService.get();
  }

  submit(){
    console.log(this.profileForm.value);
    console.log(this.profileForm.valid);
    this.userService.updateProfile(this.profileForm.value).subscribe();
  }
}
