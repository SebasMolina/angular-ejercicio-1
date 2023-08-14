import { Component, OnInit } from '@angular/core';
import { MyList } from '../models/my-list';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  ngOnInit(): void {
    this.datosGuardadosJSON = localStorage.getItem("datosUsuario");
    console.log(this.datosGuardadosJSON)
    this.datosGuardadosJSON.array.forEach( (element: MyList) => {
      
      let last_item: MyList = {
        id: element.id,
        task: element.task,
        date_of: element.date_of
      }
      this.lista.push(last_item);
    });
    console.log(this.lista);
  }
  datosGuardadosJSON:any;
  lista: MyList[]=[];
  item_task: string = "";
  item_date: Date= new Date();
  
  addTask(){
    if(this.item_task.trim().length && this.item_date) {
      let last_item: MyList = {
        id: this.lista.length,
        task: this.item_task,
        date_of: this.item_date
      }
      this.lista.push(last_item);
      const datosJSON = JSON.stringify(this.lista);
      localStorage.setItem("datosUsuario", datosJSON);
      this.item_task="";  
    }
  }

  delete(index:number){
    this.lista.splice(index,1)
  }
}
