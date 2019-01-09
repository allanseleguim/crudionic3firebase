import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../pages/models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public afAUth: AngularFireAuth

    ) 
    {
    }

 async login() {
   try{
  const result = this.afAUth.auth.signInWithEmailAndPassword(this.user.email, this.user.password);
  if (result) {
  this.navCtrl.push(HomePage);
}
}
  catch(e) {
    console.log(e);
  }


 }

 register() {
   this.navCtrl.push('RegisterPage');
 }

}
