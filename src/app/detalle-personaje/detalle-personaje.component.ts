import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickMortyService } from '../rick-morty.service';

@Component({
  selector: 'app-detalle-personaje',
  templateUrl: './detalle-personaje.component.html',
  styleUrls: ['./detalle-personaje.component.css']
})
export class DetallePersonajeComponent implements OnInit {
  personaje: any;

  constructor(
    private route: ActivatedRoute,
    private rickMortyService: RickMortyService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.rickMortyService.getPersonajeById(+id).subscribe(
        (data: any) => {
          this.personaje = data;
        },
        (error) => {
          console.error('Error al obtener el detalle del personaje', error);
        }
      );
    }
  }
}
