import { IProfile } from './profile.interface';
import { Skill } from 'src/app/core/models/skill.model';

export interface IDeveloperProfile extends IProfile{
    shortDescription: string;
    summary:string;
    skills:Skill[]
}