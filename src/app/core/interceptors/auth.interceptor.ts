// Kullanıcının yetkilendirme bilgilerini (örneğin, JWT token'ı) her isteğe otomatik
//  olarak eklemek için kullanılır. Bu sayede, her HTTP isteğinde yetkilendirme 
//  bilgilerini tekrar tekrar eklemekten kaçınılır.

import { HttpInterceptorFn } from '@angular/common/http';
import { LocalStorageService } from '../../features/services/concretes/local-storage.service';
import { inject } from '@angular/core';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const storageService = inject(LocalStorageService);

  const token =storageService.getToken();

  const authRequest = req.clone({
    setHeaders:{
      Authorization:`Bearer ${token}`
    }
  })
  return next(authRequest);
};
