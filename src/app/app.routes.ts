import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { PostsComponent } from './posts/posts.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'about', component: AboutComponent, },
    { path: 'contact', component: ContactComponent, },
    { path: 'home', component: HomeComponent, },
    { path: 'posts', component: PostsComponent, },
    { path: '**', component: ErrorComponent },
    
];
