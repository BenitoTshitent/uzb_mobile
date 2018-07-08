import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams,Nav } from 'ionic-angular';

//pages
import {AcceuilPage} from "../acceuil/acceuil";
import {TacceuilPage} from "../tacceuil/tacceuil";
import {AproposPage} from "../apropos/apropos";
import {ComptePage} from "../compte/compte";
import {PanierPage} from "../panier/panier";

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  // Basic root for our content view
  rootPage = 'TacceuilPage';

  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    { title: 'Acceuil', pageName: 'TacceuilPage', tabComponent: 'AcceuilPage', index: 0, icon: 'home' },
    { title: 'Panier', pageName: 'PanierPage', icon: 'shuffle' },
    { title: 'Mon compte', pageName: 'ComptePage', icon: 'profil' },
    { title: 'Apropos', pageName: 'AproposPage', icon: 'shuffle' }
  ];

  constructor(public navCtrl: NavController ) {
  }

  openPage(page: PageInterface) {
    let params = {};

    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
    }

    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      // Tabs are not active, so reset the root page
      // In this case: moving to or from SpecialPage
      this.nav.setRoot(page.pageName, params);
    }
  }

  isActive(page: PageInterface) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNav();

    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }

    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }

}
