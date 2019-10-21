import { Injectable } from '@angular/core';
import { IDeveloperProfile } from '../../models/developerProfile.interface';
import { IPosterProfile } from '../../models/posterProfile.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  //get profile
  public getProfile(): Observable<IDeveloperProfile | IPosterProfile> {
    return this.http.get<IDeveloperProfile | IPosterProfile>(`${environment.API_END}profile`);
  }

  //update profile
  public updateProfile(profile: IDeveloperProfile | IPosterProfile): Observable<IDeveloperProfile | IPosterProfile> {
    return this.http.put<IDeveloperProfile | IPosterProfile>(`${environment.API_END}profile`, profile);
  }

  //change password
  public changePassword(oldPassword: string, newPassword: string): Observable<boolean> {
    return this.http.post<boolean>(`${environment.API_END}updatePassword`, { oldPassword, newPassword });
  }
}
