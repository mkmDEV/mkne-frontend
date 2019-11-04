import {Component, OnInit} from '@angular/core';
import {faBuilding, faEnvelope, faHome, faMobile, faPhone} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  CURRENT_YEAR = new Date().getFullYear();
  COMPANY_NAME = 'Magyar Környezeti Nevelési Egyesület';
  SHORT_COMPANY_NAME = 'MKNE';
  MISSION = 'A társadalom ismereteinek, környezeti tudatosságának és felelősségének fejlesztése, gondolkodásának és életmódjának környezetbaráttá alakítása a küldetésünk.';
  COMPANY_ADDRESS = '1031. ' + 'Budapest' + ', ' + 'Váci Mihály tér 4.';
  OFFICE_ADDRESS = '1119. ' + 'Budapest' + ', ' + 'Etele út 59-61.';
  COMPANY_EMAIL = 'mkne@mkne.hu';
  COMPANY_PHONE = '+36 1 321 4796';
  COMPANY_MOBILE = '+36 20 494 9469';

  faHome = faHome;
  faBuilding = faBuilding;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faMobile = faMobile;

  constructor() {
  }

  ngOnInit() {
  }

}
