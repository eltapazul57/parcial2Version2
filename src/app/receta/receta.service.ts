import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Receta } from './receta';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
 providedIn: 'root'
})
export class RecetaService {

private apiUrl: string = environment.baseUrl + 'recipes';

constructor(private http: HttpClient) { }

getRecetas(): Observable<Receta[]> {
  return this.http.get<Receta[]>(this.apiUrl);
}
}
