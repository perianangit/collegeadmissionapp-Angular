import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationApprovalComponent } from './application-approval/application-approval.component';
import { ApplicationStatusComponent } from './application-status/application-status.component';
import { ApplyComponent } from './apply/apply.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { LoginComponent } from './login/login.component';
import { RegUsersComponent } from './reg-users/reg-users.component';
import { RegisterComponent } from './register/register.component';
import { RoleGuard } from './role.guard';
import { SelectDepartmentComponent } from './select-department/select-department.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'register',component: RegisterComponent},
  {path:'login',component: LoginComponent},
  {path:'list-users',component: ListUsersComponent, canActivate:[AuthGuard,RoleGuard]},
  {path:'view-user',component: ViewUserComponent,canActivate:[AuthGuard]},
  {path:'application-approval',component:ApplicationApprovalComponent},
  {path:'application-status',component:ApplicationStatusComponent},
  {path:'apply',component:ApplyComponent},
  {path:'reg-users',component:RegUsersComponent},
  {path:'select-department',component:SelectDepartmentComponent},
  {path:'',redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
