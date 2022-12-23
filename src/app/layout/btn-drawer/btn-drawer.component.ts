import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { Observable, Subject } from 'rxjs';
import { map, shareReplay, takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-btn-drawer',
    templateUrl: './btn-drawer.component.html',
    styleUrls: ['./btn-drawer.component.scss']
})
export class BtnDrawerComponent implements OnInit,OnDestroy {
    private _destroy = new Subject<void>();
    @Input() drawer!: MatDrawer;

    readonly isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.XSmall)
        .pipe(
            map(result => result.matches),
            shareReplay(),
            takeUntil(this._destroy)
        );

    constructor(
        private breakpointObserver: BreakpointObserver,
        // public drawerSvc: DrawerService,
    ) {
        // this.drawerSvc.drawer
        // .pipe(takeUntil(this._destroy))
        // .subscribe(d => this.drawer = d)
    }

    ngOnInit(): void { }

    ngOnDestroy(): void {
        this._destroy.next();
    }

}
