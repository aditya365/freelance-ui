import { Skill } from './skill.model';

export interface DevelopersFilter{
    skills:Skill[],
    minFee:number,
    maxFee:number
}