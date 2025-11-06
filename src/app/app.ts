import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { Project } from './models/project.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  protected readonly title = signal('MyAngularApp');
  isDisabled = true;

  myProjectsOG: Project[] = [ {
      company: 'Company A',
      role: 'Developer',
      description: 'Details of Job 1',
      imageSrc: 'https://via.placeholder.com/150',
      link: 'https://example.com',
      yearStarted: 2020,
      yearEnded: 2022,
      skills: ['Angular', 'TypeScript', 'CSS']
    },
    {
      company: 'Company B',
      role: 'Designer',
      description: 'Details of Job 2',
      imageSrc: 'https://via.placeholder.com/150',
      link: 'https://example.com',
      yearStarted: 2020,
      yearEnded: 2022,
      skills: ['Angular', 'TypeScript', 'CSS']
    },
    {
      company: 'Company C',
      role: 'Manager',
      description: 'Details of Job 3',
      imageSrc: 'https://via.placeholder.com/150',
      link: 'https://example.com',
      yearStarted: 2020,
      yearEnded: 2022,
      skills: ['Prototyping', 'Project Management', 'Solution Design']
    }
  ];

  myProjects: Project[] = [...this.myProjectsOG];

  sortByRole() {
    this.myProjects.sort((a, b) => a.role.localeCompare(b.role));
  }
  sortByCompany() {
    this.myProjects.sort((a, b) => a.company.localeCompare(b.company));
  }
  reverseSortByCompany() {
    this.myProjects.sort((a, b) => b.company.localeCompare(a.company));
  }
  reverseSortByRole() {
    this.myProjects.sort((a, b) => b.role.localeCompare(a.role));
  }

  sortByYearStarted() {
    this.myProjects.sort((a, b) => a.yearStarted - b.yearStarted);
  }
  reverseSortByYearStarted() {
    this.myProjects.sort((a, b) => b.yearStarted - a.yearStarted);
  }



  listSkills() {
    const skillsSet = new Set<string>();
    this.myProjectsOG.forEach(project => {
      project.skills.forEach((skill: string) => skillsSet.add(skill));
    });
    return Array.from(skillsSet);
  }
  skills: string[] = this.listSkills();
  activeSkills: string[] = [];

  showActiveSkillsProjects() {
    return this.myProjectsOG.filter((project: Project) => {
      console.log('Checking project:', project.company);

      for(let s of this.activeSkills) {
        if(project.skills.includes(s)) {
          console.log('Project matches active skill:', s, project.skills);
          return true;
        }
      }
      return false;
    });
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
}
