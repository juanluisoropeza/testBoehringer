import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-detalle-post',
  templateUrl: './detalle-post.component.html',
  styleUrls: ['./detalle-post.component.scss']
})
export class DetallePostComponent implements OnInit {

  public idPost:number;
  public datosSubscribe:Subscription;
  public datosComentariosSubscribe:Subscription;
  public datosPost:any;
  public datosPostComentarios:any;
  public existenDetalles:boolean = false;
  public existenComentarios:boolean = false;

  private selectedLink: string="no";
  radioSelected:any = "2";

  constructor(private route: ActivatedRoute,
    private servicios: ServiciosService,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.idPost=params.id);
    this.obtenerDetallePost(this.idPost);
    this.obtenerComentariosPost(this.idPost);
  }

  public obtenerDetallePost(id) {
    this.datosSubscribe = this.servicios.obtenerDetallePost(id).subscribe(response => {
      if(response != "") {
        this.existenDetalles = true;
        this.datosPost = response;
      }
    }); 
  }

  public obtenerComentariosPost(id) {
    this.datosComentariosSubscribe = this.servicios.obtenerComentariosPost(id).subscribe(response => {
      if(response != "") {
        this.existenComentarios = true;
        this.datosPostComentarios = response;
        console.log(this.datosPostComentarios);
      }
    }); 
  }

  public ngOnDestroy():void {
    if (this.datosSubscribe != null)
      this.datosSubscribe.unsubscribe(); 
    if (this.datosComentariosSubscribe != null)
      this.datosComentariosSubscribe.unsubscribe(); 
  }

  public setradio(e: string): void {
    this.selectedLink = e;
  } 

  public isSelected(name: string): boolean {    
    if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown  
      return false;
    }
    return (this.selectedLink === name); // if current radio button is selected, return true, else return false  
  }   

}
