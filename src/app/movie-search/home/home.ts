import { Component } from '@angular/core';
import { Project } from '../../../models/project.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  
})
export class Home {
  myProjects: Project[] = [];
  myProjectsOG: Project[] = [];
  skills: string[] = [];
  activeSkills: string[] = [];

  resetFilter() {
    this.myProjects = [...this.myProjectsOG];
  }

  filterDisplayOnSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    const searchTerm = input.value.toLowerCase();

    this.myProjects = this.myProjectsOG.filter(project =>
      project.company.toLowerCase().includes(searchTerm) ||
      project.role.toLowerCase().includes(searchTerm) ||
      project.description.toLowerCase().includes(searchTerm) ||
      project.skills.some((skill: string) => skill.toLowerCase().includes(searchTerm))
    );
  }

  listSkills() {
    const skillsSet = new Set<string>();
    this.myProjectsOG.forEach(project => {
      project.skills.forEach((skill: string) => skillsSet.add(skill));
    });
    return Array.from(skillsSet);
  }


  showActiveSkillsProjects() {
    this.myProjects = [...this.myProjectsOG];
    const filtered = this.myProjects.filter((project: Project) => {
      console.log('Checking project:', project.company);

      for(let s of this.activeSkills) {
        if(project.skills.includes(s)) {
          console.log('Project matches active skill:', s, project.skills);
          return true;
        }
      }
      return false;
    });

    if(filtered.length > 0) {
      return filtered;
    }
    return this.myProjects;
  }

  filterDisplayOnSkill(skill: string, event: Event) {
    event.preventDefault();
    
    if(this.activeSkills.includes(skill)) {
      this.activeSkills = this.activeSkills.filter(s => s !== skill);
    } else {
      this.activeSkills.push(skill);
    }


    this.myProjects = this.showActiveSkillsProjects();
    
    
  }

  resetActiveSkills() {
    
    this.myProjects = [...this.myProjectsOG];
    this.activeSkills = [];
    this.showActiveSkillsProjects();
  }

  ngOnInit() {
    this.myProjectsOG = [ {
      company: 'Company A',
      role: 'Developer',
      description: 'Details of Job 1',
      imageSrc: '/apple-touch-icon.png',
      link: 'https://example.com',
      yearStarted: 2020,
      yearEnded: 2022,
      skills: ['Angular', 'TypeScript', 'CSS']
    },
    {
      company: 'Company B',
      role: 'Designer',
      description: 'Details of Job 2',
      imageSrc: '/apple-touch-icon.png',
      link: 'https://example.com',
      yearStarted: 2020,
      yearEnded: 2022,
      skills: ['Angular', 'TypeScript', 'CSS']
    },
    {
      company: 'Company C',
      role: 'Manager',
      description: 'Details of Job 3',
      imageSrc: '/apple-touch-icon.png',
      link: 'https://example.com',
      yearStarted: 2020,
      yearEnded: 2022,
      skills: ['Prototyping', 'Project Management', 'Solution Design']
    }
  ];

   this.myProjects = [...this.myProjectsOG];
   this.skills = this.listSkills();
  }
}
