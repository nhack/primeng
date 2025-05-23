import { Code } from '@/domain/code';
import { Component } from '@angular/core';

@Component({
    selector: 'download-doc',
    standalone: false,
    template: `
        <app-docsectiontext>
            <p>PrimeIcons is available at npm, run the following command to download it to your project.</p>
        </app-docsectiontext>
        <app-code [code]="code" [hideToggleCode]="true"></app-code>
    `
})
export class DownloadDoc {
    code: Code = {
        command: `npm install primeicons`
    };
}
