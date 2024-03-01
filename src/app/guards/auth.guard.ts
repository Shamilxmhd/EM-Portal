import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core'
import { AdminService } from '../services/admin.service';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = () => {
  const authStatus = inject(AdminService)
  const toaster = inject(ToastrService)
  const router = inject(Router)


  if (authStatus.isLoggedIn()) {
    return true
  } else {
    toaster.error('Operationn denied...Please Login!!!')
    router.navigateByUrl('')
    return false;
  }

};
