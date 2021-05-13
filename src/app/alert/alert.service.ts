import { ComponentFactoryResolver, Inject, Injectable, Optional, ViewContainerRef } from "@angular/core";
import { AlertModel, Config } from "./alert.data";

@Injectable({
    providedIn: 'root'
})
export class AlertService{
    alertConfig: any;

    constructor(private compoentFactoryResolver: ComponentFactoryResolver, @Optional() config? : Config){ 
      this.setAlertConfig(config);
    }

    getAlertConfig(){ return this.alertConfig; }

    setAlertConfig(config: Config){
      console.log(config);
      if(config){
        console.log(config);
        this.alertConfig = config; 
      }
    }

    async createAlert(viewRef: ViewContainerRef, alert: AlertModel){
      const { AlertsComponent } = await import('./alert.component');

      let component = viewRef.createComponent(this.compoentFactoryResolver.resolveComponentFactory(AlertsComponent));
      component.instance.setConfigParameters(this.getAlertConfig());
      component.instance.setAlertParameters(alert);
      component.instance.showAlert();
      return component;
    }

    info(viewref: ViewContainerRef, msg: string){
      let alert = new AlertModel();
      alert.msg = msg; alert.type = 'info';

      return this.createAlert(viewref, alert);
    }

    success(viewref: ViewContainerRef, msg: string){
      let alert = new AlertModel();
      alert.msg = msg; alert.type = 'success';
 
      return this.createAlert(viewref, alert);
    }

    danger(viewref: ViewContainerRef, msg: string){
      let alert = new AlertModel();
      alert.msg = msg; alert.type = 'danger';
 
      return this.createAlert(viewref, alert);
    }

    warning(viewref: ViewContainerRef, msg: string){
      let alert = new AlertModel();
      alert.msg = msg; alert.type = 'warning';
 
      return this.createAlert(viewref, alert);
    }

    primary(viewref: ViewContainerRef, msg: string){
      let alert = new AlertModel();
      alert.msg = msg; alert.type = 'primary';
 
      return this.createAlert(viewref, alert);
    }
}

