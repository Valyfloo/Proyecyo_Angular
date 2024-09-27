import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Importa Router
import { RickMortyService } from '../rick-morty.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  personaje: any; 
  personajes: any[] = []; 
  episodes: any[] = []; // Para almacenar los episodios
  searchName: string = ''; 
  searchId: number | null = null; 
  currentPage: number = 1;
  totalPages: number = 1;
  resultsPerPage: number = 10; 
  pageInput: number | null = this.currentPage; 

  constructor(private rickMortyService: RickMortyService, private router: Router) { }  // Injecta el Router

  ngOnInit(): void {
    this.loadInitialCharacters();
  }

  loadInitialCharacters(): void {
    this.rickMortyService.getPersonajes(this.currentPage, this.resultsPerPage).subscribe(
      (data: any) => {
        this.personajes = data.results;
        this.totalPages = data.info.pages; 
      },
      (error) => {
        console.error('Error al obtener los personajes', error);
      }
    );
  }

  searchById(): void {
    if (this.searchId !== null) {
      this.rickMortyService.getPersonajeById(this.searchId).subscribe(
        (data: any) => {
          this.personaje = data;
          this.personajes = []; // Limpiar los resultados de búsqueda por nombre
          this.episodes = []; // Limpiar episodios previos
          this.viewEpisodes(data.episode); // Cargar episodios del personaje
        },
        (error) => {
          console.error('Error al obtener el personaje', error);
        }
      );
    }
  }

  searchByName(): void {
    if (this.searchName.trim()) {
      this.rickMortyService.searchPersonajeByName(this.searchName).subscribe(
        (data: any) => {
          this.personajes = data.results; 
          this.personaje = null; 
          this.viewEpisodes(undefined); // Llamar a viewEpisodes con undefined para limpiar episodios
        },
        (error) => {
          console.error('Error al buscar el personaje', error);
        }
      );
    }
  }

  viewEpisodes(episodeUrls: string[] | undefined): void {
    this.episodes = []; // Limpiar episodios previos
    if (episodeUrls && episodeUrls.length) {
      episodeUrls.forEach(url => {
        this.rickMortyService.getEpisodeByUrl(url).subscribe(
          (data: any) => {
            this.episodes.push(data); 
          },
          (error) => {
            console.error('Error al obtener el episodio', error);
          }
        );
      });
    } else {
      console.warn('No hay episodios para mostrar.');
    }
  }

  navigateToCharacterDetail(id: number): void {
    this.router.navigate(['/detalle-personaje', id]);  // Navega a la ruta con el ID del personaje
  }

  goToPage(page: number): void {
    if (page > 0 && page <= this.totalPages) {
      this.currentPage = page;
      this.pageInput = this.currentPage; // Sincroniza el input con la página actual
      this.loadInitialCharacters();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.pageInput = this.currentPage; // Sincroniza el input con la página actual
      this.loadInitialCharacters();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageInput = this.currentPage; // Sincroniza el input con la página actual
      this.loadInitialCharacters();
    }
  }

  goToPageNumber(): void {
    if (this.pageInput !== null) {
      this.goToPage(this.pageInput);
    }
  }
}
