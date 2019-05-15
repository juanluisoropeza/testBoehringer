import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ServiciosService } from 'src/app/services/servicios.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  form: FormGroup;
  submitted:boolean = false;
  guardarPost:Subscription;

  constructor(private fb: FormBuilder,
    private dataService: ServiciosService,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      userId: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });   
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    } else {      
      let datos = JSON.stringify({
        title: this.form.get('title').value,
        body: this.form.get('body').value,
        userId: parseInt(this.form.get('userId').value)
      });
      console.log(datos);
      this.guardarPost = this.http.post('https://jsonplaceholder.typicode.com/posts', JSON.stringify(datos)).subscribe(response => {
        //this.listaDatos = response;  
        alert("Post is added!");
        this.router.navigate(["/"]);
      });
    }

  }

}
