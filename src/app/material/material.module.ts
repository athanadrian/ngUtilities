import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
    imports: [
        CommonModule,
        MatRadioModule,
        MatCheckboxModule,
        MatSelectModule
    ],
    declarations: [],
    exports: [
        MatRadioModule,
        MatCheckboxModule,
        MatSelectModule
    ],
    providers: []
})
export class MaterialModule { }