import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/shared/services/services.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  valor: any[] = [];
  public comentarios: any[] = [];
  constructor(
    private service: ServicesService
  ) { }

  ngOnInit(): void {
    
    this.service.getAllComments().subscribe(comments => {
        this.valor.push(comments);
        for (const iterator of this.valor) {
          for (let index = 0; index < iterator.length; index++) {
            const elemento = iterator[index];
            this.comentarios.push(elemento);
            
          }
        }
    })
  }

}
