import { NgModule } from '@angular/core';

import { JhipsterConfGatewaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JhipsterConfGatewaySharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JhipsterConfGatewaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsterConfGatewaySharedCommonModule {}
