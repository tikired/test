import { RouterModule ,Routes, Router } from '@angular/router'
import { MainComponent } from './main/main.component'
import { NotfoundComponent } from './layout/notfound/notfound.component'
import { ContactoComponent } from './contacto/contacto.component'

const appRoutes: Routes = [
    { path: 'main', component: MainComponent },
    { path: 'contacto', component: ContactoComponent},
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: '**', component: NotfoundComponent }
]

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true })