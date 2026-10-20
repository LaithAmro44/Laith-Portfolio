import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private titleService = inject(Title);
  private metaService = inject(Meta);

  initDefaultMeta(): void {
    const title = 'Laith Q. Amro — Full Stack Software Engineer (ASP.NET Core | Angular)';
    const desc = 'Portfolio of Laith Qasem Amro — Full Stack Software Engineer specialized in ASP.NET Core, ABP Framework, Angular Micro-Frontends, and Domain-Driven Design (DDD).';
    const siteUrl = 'https://laithamro.com/';
    const ogImage = 'https://avatars.githubusercontent.com/u/147944575';

    this.titleService.setTitle(title);

    this.metaService.updateTag({ name: 'description', content: desc });
    this.metaService.updateTag({ property: 'og:title', content: title });
    this.metaService.updateTag({ property: 'og:description', content: desc });
    this.metaService.updateTag({ property: 'og:image', content: ogImage });
    this.metaService.updateTag({ property: 'og:url', content: siteUrl });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });

    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: title });
    this.metaService.updateTag({ name: 'twitter:description', content: desc });
    this.metaService.updateTag({ name: 'twitter:image', content: ogImage });
  }
}
