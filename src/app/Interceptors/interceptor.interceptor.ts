import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { LoadingService } from '../Services/loading/loading.service';

export const interceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const cargaService = inject(LoadingService);
  cargaService.showLoader();

  // Serializar info asincrona, lo que trae next
  return next(req).pipe(
    finalize(() => {
      cargaService.hideLoader();
    })
  );
};
