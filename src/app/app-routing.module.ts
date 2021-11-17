import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/intro',
    pathMatch: 'full'
  },
  {
    path: 'intro',
    loadChildren: () => import('./Pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'course-data',
    loadChildren: () => import('./Pages/course-data/course-data.module').then( m => m.CourseDataPageModule)
  },
  {
    path: 'free-courses',
    loadChildren: () => import('./Pages/free-courses/free-courses.module').then( m => m.FreeCoursesPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./Pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'my-courses',
    loadChildren: () => import('./Pages/my-courses/my-courses.module').then( m => m.MyCoursesPageModule)
  },
  {
    path: 'paid-courses',
    loadChildren: () => import('./Pages/paid-courses/paid-courses.module').then( m => m.PaidCoursesPageModule)
  },
  {
    path: 'paid-recipes',
    loadChildren: () => import('./Pages/paid-recipes/paid-recipes.module').then( m => m.PaidRecipesPageModule)
  },
  {
    path: 'purchase',
    loadChildren: () => import('./Pages/purchase/purchase.module').then( m => m.PurchasePageModule)
  },
  {
    path: 'recipe-data',
    loadChildren: () => import('./Pages/recipe-data/recipe-data.module').then( m => m.RecipeDataPageModule)
  },
  {
    path: 'recipes',
    loadChildren: () => import('./Pages/recipes/recipes.module').then( m => m.RecipesPageModule)
  },
  {
    path: 'select-login',
    loadChildren: () => import('./Pages/select-login/select-login.module').then( m => m.SelectLoginPageModule)
  },
  {
    path: 'my-downloads',
    loadChildren: () => import('./Pages/my-downloads/my-downloads.module').then( m => m.MyDownloadsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
