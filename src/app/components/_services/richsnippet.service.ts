/**
 *  *
 *  *  * Copyright (C) expertpackersmovers.com- All Rights Reserved
 *  *  * Unauthorized copying of this file, via any medium is strictly prohibited
 *  *  * Proprietary and confidential
 *  *  * Written by Sathish Kumar(satz) <sathish.thi@gmail.com>
 *  *  * Generates RichSnippets for Google Search Engine(Contact us page)
 *
 */

import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable()
export class RichSnippetService {
    richSnippets: SafeHtml;

    constructor(private sanitizer: DomSanitizer) { }
    /**
     *Contact us page jsonLD Optimized for google search engine
     */
    contactJsonLD(): SafeHtml {
        const json = {
            '@context': 'http://schema.org',
            '@type': 'Organization',
            'url': 'http://www.expertpackersandmovers.com/',
            'name': 'ExpertPackersMovers',
            'contactPoint': {
                '@type': 'ContactPoint',
                'telephone': '+91 - 9845166313',
                'contactType': 'customer service'
            }
          };
          return this.getSafeHTML(json);
    }
    /*
    * Return SafeHTML
    * @return safeHTML
    */
    getSafeHTML(value: {}): SafeHtml {
        const json = value ? JSON.stringify(value, null, 2).replace(/<\/script>/g, '<\\/script>') : '';
        const html = `<script type="application/ld+json">${json}</script>`;
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }
}
