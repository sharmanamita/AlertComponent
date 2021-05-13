import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from "@angular/core";
import { AlertsComponent } from "./alert.component";
import { Config } from "./alert.data";
import { AlertDirective } from "./alert.directive";
import { AlertService } from "./alert.service";

@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [AlertsComponent, AlertDirective],
    exports: [AlertsComponent, AlertDirective],
    providers: [AlertService],
    entryComponents: [ AlertsComponent]
})
export class AlertModule{

    constructor(@Optional() @SkipSelf() parentModule?: AlertModule) {
        if (parentModule) {
          throw new Error(
            'CalAlertModule is already loaded. Import it in the AppModule only');
        }
    }

    static forRoot(config: Config): ModuleWithProviders<AlertModule>{
        console.log(config);
        return {
            ngModule: AlertModule,
            providers: [
                { provide: Config, useValue: config }
            ]
        };
    }
}