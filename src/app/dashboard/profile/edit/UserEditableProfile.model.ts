import { Skill } from 'src/app/core/models/skill.model';

export default interface UserEditableProfile{
    firstName:string;
    lastName: string;
    mobile:string;
    shortDescription:string;
    summary:string;
    skills:Skill[];
}