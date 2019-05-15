import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServiciosService } from 'src/app/services/servicios.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public datosSubscribe:Subscription;
  public eliminarDatosSubscribe:Subscription;
  public listaDatos:any;
  public searchText : string;
  public existenDatos:boolean = false;

  constructor(private dataService: ServiciosService,
    private servicios: ServiciosService,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit() {
    this.obtenerServicioPrincipal();
  }

  obtenerServicioPrincipal() {
    this.datosSubscribe = this.servicios.obtenerDatosServicio().subscribe(response => {
      //console.log(response);
      if(response != "") {
        this.listaDatos = response;
        this.existenDatos = true;
      }
    }); 
  }

  irADetalle(id):void {
    this.router.navigate(["/post/"+id]);
  }

  agregarPost():void {
    this.router.navigate(["/new-post"]);
  }

  deletePost(datos) {
    if(confirm("Are you sure to delete this element?")) {
      this.eliminarDatosSubscribe = this.servicios.eliminarElemento(datos.id).subscribe(response => {
        /*let index = this.listaDatos.indexOf(datos);
        this.listaDatos.splice(index, 1);*/
        const valueToRemove = datos.id;
        const filteredItems = this.listaDatos.filter(function(item) {          
          return item.id !== valueToRemove
        });
        this.listaDatos = filteredItems;
      });
    }
  }

  ngOnDestroy():void {
    if (this.datosSubscribe != null)
      this.datosSubscribe.unsubscribe();      
  }

}
