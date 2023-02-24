import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    data: { animation: 'home'}
  },
  {
    path: 'news',
    loadChildren: () =>
      import('./main/news/news.module').then((m) => m.NewsModule),
      data: { animation: 'news'}
  },
  {
    path: 'guides',
    loadChildren: () =>
      import('./main/guides/guides.module').then((m) => m.GuidesModule),
      data: { animation: 'guides'}
  },
  {
    path: 'documentation',
    loadChildren: () =>
      import('./main/documentation/documentation.module').then(
        (m) => m.DocumentationModule
      ),
      data: { animation: 'documentation'}
  },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
