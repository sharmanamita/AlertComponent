import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AlertDirective } from './alert/alert.directive';
import { AlertService } from './alert/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'Custom-Alert-Component';
  @ViewChild(AlertDirective, {static: true}) viewRef: AlertDirective;
  viewAlertRef: ViewContainerRef;

  constructor(private alertService: AlertService){ }

  ngOnInit(){
    this.viewAlertRef = this.viewRef.viewContainerRef;
    this.alertService.success(this.viewAlertRef, "Successfully Created Alert!!!");
    // this.alertService.danger(this.viewAlertRef, "Successfully Created Alert!!!");
    // this.alertService.warning(this.viewAlertRef, "Successfully Created Alert!!!");
    // this.alertService.info(this.viewAlertRef, "Successfully Created Alert!!!");
  }

  showAlert(flag: string){
    if(flag === 'primary') this.alertService.primary(this.viewAlertRef, "Successfully Created Alert!!!");
    if(flag === 'warning') this.alertService.warning(this.viewAlertRef, "Successfully Created Alert!!!");
    if(flag === 'info') this.alertService.info(this.viewAlertRef, "Successfully Created Alert!!!");
    if(flag === 'danger') this.alertService.danger(this.viewAlertRef, "Successfully Created Alert!!!");
    if(flag === 'success') this.alertService.success(this.viewAlertRef, "Successfully Created Alert!!!");
    
  }
}
