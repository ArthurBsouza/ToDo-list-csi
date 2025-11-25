import { Component, inject } from '@angular/core';
import { TitleComponent } from '../../components/shared/title/title';
import { TarefasService } from '../../services/tarefas.service';
import { MatIconModule } from '@angular/material/icon'
@Component({
  selector: 'app-tarefas',
  imports: [TitleComponent, MatIconModule],
  templateUrl: './tarefas.html',
  styleUrl: './tarefas.css',
})
export class Tarefas {
  readonly tarefas = inject(TarefasService);

  addTarefa(event: Event, input:HTMLInputElement){
    event.preventDefault()
    const title = input.value.trim();
    if(!title) return;
    
      this.tarefas.add(title);
      input.value = '';
    
  }
}
