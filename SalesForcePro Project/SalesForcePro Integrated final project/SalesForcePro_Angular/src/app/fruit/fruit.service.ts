import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fruit } from './fruit';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  constructor(private httpClient:HttpClient) {}

  getAll(){
    // return this.httpClient.get<Fruit[]>('http://localhost:3000/fruits');
    return this.httpClient.get<Fruit[]>('http://localhost:5144/api/Product/GetAllProducts');

  }

  creat(data:Fruit){
    return this.httpClient.post("http://localhost:5144/api/Product",data)
    // return this.httpClient.post('http://localhost:3000/fruits',data)

  }

  edit(id:number){
    return this.httpClient.get<Fruit>(`http://localhost:5144/api/Product/GetProductByID?id=${id}`);
    // return this.httpClient.get<Fruit>(`http://localhost:3000/fruits/${id}`);

  }

  update(data:Fruit){
    return this.httpClient.put<Fruit>(`http://localhost:5144/api/Product`,data);
    // return this.httpClient.put<Fruit>(`http://localhost:3000/fruits/${data.id}`,data);

  }


  delete(id:number){
    return this.httpClient.delete<Fruit>(`http://localhost:5144/api/Product/DeleteProductByID?id=${id}`);
    // return this.httpClient.delete<Fruit>(`http://localhost:3000/fruits/${id}`);

  }

}
