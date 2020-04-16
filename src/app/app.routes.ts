import { RouterModule ,Routes, Router } from '@angular/router'
import { MainComponent } from './main/main.component'
import { NotfoundComponent } from './layout/notfound/notfound.component'

const appRoutes: Routes = [
    { path: 'main', component: MainComponent },
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: '**', component: NotfoundComponent }
]

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true })