import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GESTION DE EMPLEADOS';
  msg:string='';
  empleados= [
    {'name':'andres',position:'managger',email:'andrew@gmail.com'},
    {'name':'manuel',position:'programador',email:'manolo@gmail.com'},
    {'name':'sandra',position:'diseñadora',email:'sandradis@gmail.com'}

  ];



  model:any={};
  model2:any={};
  hideUpdate:boolean=true;

  agregarEmpleado():void{
  this.empleados.push(this.model)
  this.msg="Empleado agregado exitosamente";
  }

  eliminarEmpleado(i):void{
var answer= confirm("Estas seguro de eliminarlo");
  if(answer){
this.empleados.splice(i,1);
this.msg="Empleado eliminado exitosamente";

  }
  }
myValue;
  editarEmpleado(i):void{
this.hideUpdate=false;
this.model2.name=this.empleados[i].name;
this.model2.position=this.empleados[i].position;
this.model2.email=this.empleados[i].email;

   this.myValue=i;
  }

  actualizarEmpleado():void{
let i = this.myValue;
    
for(let e = 0;e <this.empleados.length;e++){
if(i==e){
this.empleados[i]=this.model2;
this.model2={};
this.msg="Empleado actualizado exitosamente";

}
}

  }

  closeAlert():void{
this.msg='';
  }

}
