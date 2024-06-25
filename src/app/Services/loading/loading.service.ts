import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private _isLoading = new BehaviorSubject<boolean>(false);
  loading: Observable<boolean> = this._isLoading.asObservable();

  constructor() { }

  showLoader(){
    this._isLoading.next(true);
  }

  hideLoader(){
    this._isLoading.next(false);
  }
}
