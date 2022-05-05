import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController, Platform } from '@ionic/angular';
import { ApiService } from '../../../../services/api.service';
import { AuthService } from '../../../../commonpages/login/auth.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-addinsurancedata',
  templateUrl: './addinsurancedata.component.html',
  styleUrls: ['./addinsurancedata.component.scss'],
})
export class AddinsurancedataComponent implements OnInit {

  accid:any;
  constructor(private modalctrl: ModalController,private api:ApiService, private authService: AuthService) { }
  @Input() selacc:any; user:any;
  private userSub: Subscription; isAuthenticated = false;

  ngOnInit() {}
  closeModal(){
    this.modalctrl.dismiss();

  }
}
