import { effect, Injectable, signal } from '@angular/core';
import { tarefas } from '../model/tarefa.entity';

@Injectable({
  providedIn: 'root',
})
export class TarefasService {
  private readonly _items = signal<Array<tarefas>>([
  ]);
  readonly items = this._items.asReadonly();

  constructor(){
    this._load();

    effect(() => {
      const items = this._items();
      localStorage.setItem('tarefas', JSON.stringify(items));
    }
  )
  }

  add(title:string){
    const newTarefa: tarefas = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };
    this._items.update((items) => [...items, newTarefa]);
  }

  toggle(id: string) {
    this._items.update((items) =>
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  remove(id: string) {
    this._items.update((items) => items.filter((item) => item.id !== id));  

  }

  private _load() {
    const storedTarefas = localStorage.getItem('tarefas');
    if (storedTarefas){
      this._items.set(JSON.parse(storedTarefas))
    } 
    else{
      this._items.set([]);
    }
  }

}
