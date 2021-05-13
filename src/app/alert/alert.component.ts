import { Component, OnInit } from '@angular/core';
import { AlertModel, Config } from './alert.data';

@Component({
  selector: 'app-alerts',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.less']
})
export class AlertsComponent implements OnInit {
  message: string;
  type: string;
  isVisible: boolean = false;
  config: Config;
  styleConfig: any;

  constructor() {}

  ngOnInit(): void {  }

  setConfigParameters(config: Config){ 
    this.config = config; 
    this.styleConfig = { 
      'display': config.display,
      'text-align': config.align,
      'vertical-align': config.position
    }
  };

  setAlertParameters(alert : AlertModel){
    this.message = alert.msg;
    this.type = alert.type;
  }

  showAlert() : void {
    if (this.isVisible) { 
      return;
    } 
    this.isVisible = true;
    setTimeout(()=>{ this.isVisible = false }, this.config.timeout)
  }

}
