import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Piano';

  reproducirSonido(numero:number):void {
    const audio = new Audio();
    audio.src = "assets/sounds/note"+numero+".wav"
    audio.load;
    audio.play();
  }
}
