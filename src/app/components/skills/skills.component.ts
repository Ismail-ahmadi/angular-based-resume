import { Component, Input } from '@angular/core';
import { skillData  } from './skills.data';
import { Skill } from 'src/app/model/skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills : Skill[] = skillData
}
