import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//pages
import {AcceuilPage} from "../acceuil/acceuil";
import {CommandesPage} from "../commandes/commandes";
import {PiecesPage} from "../pieces/pieces";
import {ProduitsPage} from "../produits/produits";

@IonicPage()
@Component({
  selector: 'page-tacceuil',
  templateUrl: 'tacceuil.html',
})
export class TacceuilPage {

  tab1Root: any="AcceuilPage";
  tab2Root: any="ProduitsPage";
  tab3Root: any="CommandesPage";
  tab4Root: any="PiecesPage";
  myIndex: number;

  constructor(  public navParams: NavParams) {
    // Set the active tab based on the passed index from menu.ts
    this.myIndex = navParams.data.tabIndex || 0;

  }


}
