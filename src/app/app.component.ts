import { Component } from '@angular/core';
import {Discipline} from './shared/discipline';
import { Disciplines} from './shared/disciplines';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'lab71';
  myDepartmentName = 'pi';
  discipline: Discipline;
  disciplines = Disciplines;
  myDepartment: boolean;
  disSelected: any;
  toggle = false;



  filterDisciplines(): any {
    return this.disciplines.filter(x => x.department === this.myDepartmentName);
  }

  toggler(): void{
    this.toggle = !this.toggle;
  }

  showInfo(): any{
    return this.disciplines.filter(x => x.name === this.disSelected);
  }

  change(event: any): void{
    console.log(event + ' changed');
    if (event === '---'){
      this.toggle = false;
    }
  }
}
