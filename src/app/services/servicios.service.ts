import { Injectable } from '../../../node_modules/@angular/core';
import { HttpHeaders, HttpClient } from '../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  obtenerDatosServicio() {
    return this.http.get(this.baseUrl+'/posts');
  }

  eliminarElemento(id) {
    return this.http.delete(this.baseUrl+'/posts/'+id);
  }

  obtenerDetallePost(id) {
    return this.http.get(this.baseUrl+'/posts/'+id);
  }

  obtenerComentariosPost(id) {
    return this.http.get(this.baseUrl+'/posts/'+id+'/comments');
  }

}
