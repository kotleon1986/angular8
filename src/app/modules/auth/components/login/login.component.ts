import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {FormComponent} from '../../../shared/components/form/form.component';
import {AuthService} from '../../../../services/common/auth/auth.service';
import StorageHelper from '../../../../helpers/storage.helper';
import {takeUntil} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends FormComponent implements OnInit, OnDestroy {
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    super();
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });

    super.ngOnInit();
  }

  handleSubmit() {
    if (this.form.valid) {
      this.loading = true;
      this.authService.login(this.form.value).pipe(
        takeUntil(this.destroy)
      ).subscribe(results => {
          this.loading = false;
          if (!results.token) {
            throwError('Error. Token is missing.');
          }

          StorageHelper.set('token', results.token);
          this.router.navigate(['/']);
        }, err => this.handleValidationErrors(err));
    }
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
