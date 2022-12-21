import { Component, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-drawer-nav-list',
  templateUrl: './drawer-nav-list.component.html',
  styleUrls: ['./drawer-nav-list.component.scss']
})
export class DrawerNavListComponent {
    @Input() drawer!: MatDrawer;
    @Input() isHandset!: boolean;

    close() {

        if (this.isHandset) this.drawer.close();
    }

}
