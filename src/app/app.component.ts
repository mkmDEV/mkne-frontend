import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Magyar Környezeti Nevelési Egyesület';

  constructor(private titleService: Title, private meta: Meta) {
    titleService.setTitle('MKNE - ' + this.title);
    meta.updateTag({
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
    });
    meta.addTag(
      {
        name: 'description',
        content: 'A Magyar Környezeti Nevelési Egyesület honlapja',
      },
      true
    );
    meta.addTag({ name: 'author', content: 'MARSI, Kristóf Mátyás' }, true);
  }
}
