export class searchProfile {
  public id = '';
  public username = '';
  public designation = '';
  public description = '';
  public imgUrl = '';
  public reviews = 0;
  public rating = 0;
  public registerSkills = [];

  constructor(profile) {
    this.id = profile.id;
    this.username = profile.username;
    if (profile.description === undefined) {
      this.description = `Building quality websites and applications with HTML, CSS, JavaScript, Angular.
                          Award-winning web developer and instructor with 10+ years’ of well-rounded experience in LAMP DeveloperComponent.`;
    } else {
      this.description = profile.description;
    }
    if (profile.designation === undefined) {
      this.designation = 'Developer';
    } else {
      this.designation = profile.designation;
    }
    if (profile.imgUrl === undefined) {
      this.imgUrl = 'https://cdn12.picryl.com/photo/2016/12/31/head-the-dummy-avatar-people-b61cdb-1024.png';
    } else {
      this.imgUrl = profile.imgUrl;
    }
    this.rating = profile.rating;
    this.reviews = profile.reviews;
    this.registerSkills = profile.registerSkills;
  }
}
/*
  {
    id: '5d03c932df16910004829e53',
    username: 'prav',
    rating: 0,
    description: `Building quality websites and applications with HTML, CSS, JavaScript, Angular.
        Award-winning web developer and instructor with 10+ years’ of well-rounded experience in LAMP DeveloperComponent.`,
    designation: 'web Developer',
    imgUrl: 'http://amentotech.com/htmls/worktern/images/user/userlisting/img-03.jpg',
    reviews: 0,
    registerSkills: ['angular', 'react', 'node js', 'vue js', 'loopback js', 'html', 'JavaScript']
  }
*/
