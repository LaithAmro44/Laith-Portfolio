import { IconName } from '../models/portfolio.models';

export interface SvgDefinition {
  readonly viewBox: string;
  readonly path: string;
  readonly defaultFill?: string;
}

export const SVG_ICONS: Record<IconName, SvgDefinition> = {
  'dotnet': {
    viewBox: '0 0 24 24',
    path: '<circle cx="12" cy="12" r="10" fill="#512BD4"/><path fill="#FFF" d="M7 14.5V9.5h1.2v5H7zm2.3 0V9.5h1.1l2 3.1V9.5h1.1v5h-1l-2.1-3.2v3.2H9.3zm5.8 0V9.5h3.2v1h-2v1h1.8v1h-1.8v1.5h-1.2z"/>'
  },
  'abp': {
    viewBox: '34.5 34.5 443 443',
    path: '<circle cx="256" cy="256" r="221.5" fill="#292D33"/><path d="M256 287.2c17.6 0 32.2-14.6 32.2-32.2s-14.6-32.2-32.2-32.2-32.2 14.6-32.2 32.2 14.6 32.2 32.2 32.2z" fill="#B84297"/><g fill="#FFFFFF"><path d="M256 60.8c-29.3 0-58.5 6.8-84.9 19.5v42c23.4-14.6 50.7-23.4 79-24.4s55.6 4.9 81 18.5 45.9 33.2 60.5 56.6 23.4 51.7 23.4 79v118.1c20.5-29.3 33.2-63.4 36.1-99.5s-4.9-71.2-21.5-103.4-41-58.5-72.2-77.1C327.2 70.6 292.1 60.8 256 60.8z"/><path d="M256 415.1c-41 0-80-15.6-109.3-43.9s-46.8-66.4-48.8-107.3v-121c-28.3 40-41 88.8-35.1 137.6s30.3 93.7 67.3 124.9 84.9 47.8 134.7 45.9c49.8-2 95.6-22.4 129.8-57.6v-59.5c-13.7 24.4-34.2 44.9-58.5 59.5-24.5 13.6-51.8 21.4-80.1 21.4z"/><path d="M256 306.7c-11.7 0-23.4-3.9-32.2-10.7v37.1c16.6 6.8 36.1 8.8 53.7 3.9s33.2-14.6 44.9-28.3 18.5-31.2 19.5-49.8-3.9-36.1-14.6-51.7c-9.8-15.6-25.4-26.3-42-33.2-17.6-5.9-36.1-6.8-53.7-1-17.6 4.9-33.2 16.6-43.9 31.2s-16.6 32.2-16.6 50.7v108.3c9.8 7.8 20.5 14.6 32.2 19.5V253.1c0-10.7 2.9-20.5 8.8-29.3s13.7-15.6 23.4-19.5c9.8-3.9 20.5-4.9 30.3-2.9 10.7 2 19.5 6.8 27.3 14.6s12.7 16.6 14.6 27.3c2 10.7 1 20.5-2.9 30.3s-10.7 17.6-19.5 23.4-18.6 8.8-29.3 9.7z"/><path d="M150.6 343.8V255c0-22.4 6.8-43.9 20.5-62.5 12.7-17.6 31.2-31.2 52.7-38.1s43.9-6.8 65.4 0 40 20.5 52.7 38.1 20.5 40 20.5 62.5-6.8 43.9-20.5 62.5c-12.7 18.5-31.2 31.2-52.7 38.1-21.5 6.8-43.9 6.8-65.4 0v34.2c24.4 5.9 48.8 4.9 72.2-2 23.4-6.8 44.9-20.5 61.5-38.1 16.6-18.5 28.3-40 33.2-64.4s3.9-48.8-3.9-72.2-21.5-43.9-40-60.5-41-27.3-65.4-32.2-48.8-2.9-72.2 4.9-43.9 22.4-59.5 41V92.1c-10.7 7.8-22.4 16.6-32.2 26.3v140.5c.9 31.3 12.6 60.5 33.1 84.9z"/></g>'
  },
  'angular': {
    viewBox: '0 0 24 24',
    path: '<path fill="#DD0031" d="M12 2.5L20.7 5.6l-1.3 11.2L12 21.5l-7.4-4.7L3.3 5.6 12 2.5z"/><path fill="#FFF" d="M12 5.7L7.6 15.6h2.2l1-2.5h2.4l1 2.5h2.2L12 5.7zm1.1 5.9h-2.2l1.1-2.7 1.1 2.7z"/>'
  },
  'csharp': {
    viewBox: '0 0 24 24',
    path: '<circle cx="12" cy="12" r="10" fill="#239120"/><path fill="#FFF" d="M14 9.5a3.5 3.5 0 0 0-4 0 3.5 3.5 0 0 0 0 5 3.5 3.5 0 0 0 4 0M15.5 10v4M17 10v4M14.5 11.2h3M14.5 12.8h3"/>'
  },
  'database': {
    viewBox: '0 0 24 24',
    path: '<ellipse cx="12" cy="5" rx="8" ry="2.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M20 5v14c0 1.4-3.6 2.5-8 2.5s-8-1.1-8-2.5V5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M20 12c0 1.4-3.6 2.5-8 2.5s-8-1.1-8-2.5" fill="none" stroke="currentColor" stroke-width="2"/>'
  },
  'sql-server': {
    viewBox: '0 0 24 24',
    path: '<rect x="3" y="4" width="18" height="16" rx="2" fill="none" stroke="#CC292B" stroke-width="2"/><path d="M7 8h10M7 12h10M7 16h6" stroke="#CC292B" stroke-width="2" stroke-linecap="round"/>'
  },
  'oracle': {
    viewBox: '0 0 24 24',
    path: '<path fill="#F80000" d="M16.5 6H7.5A5.5 5.5 0 0 0 2 11.5v1A5.5 5.5 0 0 0 7.5 18h9a5.5 5.5 0 0 0 5.5-5.5v-1A5.5 5.5 0 0 0 16.5 6zm-9 9.5A3.5 3.5 0 0 1 4 12v-1a3.5 3.5 0 0 1 3.5-3.5h9A3.5 3.5 0 0 1 20 11v1a3.5 3.5 0 0 1-3.5 3.5h-9z"/>'
  },
  'redis': {
    viewBox: '0 0 24 24',
    path: '<path fill="#DC382D" d="M21.4 8.6L13 3.8a2 2 0 0 0-2 0L2.6 8.6a2 2 0 0 0-1 1.7v3.4a2 2 0 0 0 1 1.7L11 20.2a2 2 0 0 0 2 0l8.4-4.8a2 2 0 0 0 1-1.7v-3.4a2 2 0 0 0-1-1.7z"/>'
  },
  'rabbitmq': {
    viewBox: '0 0 24 24',
    path: '<path fill="#FF6600" d="M19 12a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v3a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-3zm-6-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>'
  },
  'clean-arch': {
    viewBox: '0 0 24 24',
    path: '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="2"/>'
  },
  'solid': {
    viewBox: '0 0 24 24',
    path: '<path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>'
  },
  'ddd': {
    viewBox: '0 0 24 24',
    path: '<path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>'
  },
  'microservices': {
    viewBox: '0 0 24 24',
    path: '<rect x="2" y="2" width="6" height="6" rx="1" fill="none" stroke="currentColor" stroke-width="2"/><rect x="16" y="2" width="6" height="6" rx="1" fill="none" stroke="currentColor" stroke-width="2"/><rect x="2" y="16" width="6" height="6" rx="1" fill="none" stroke="currentColor" stroke-width="2"/><rect x="16" y="16" width="6" height="6" rx="1" fill="none" stroke="currentColor" stroke-width="2"/><path d="M5 8v8M19 8v8M8 5h8M8 19h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'
  },
  'saas': {
    viewBox: '0 0 24 24',
    path: '<path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M3 15a4 4 0 004 4h10a4 4 0 001.4-7.8A5 5 0 008.3 8.3 4 4 0 003 15z"/>'
  },
  'multitenancy': {
    viewBox: '0 0 24 24',
    path: '<path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>'
  },
  'micro-frontend': {
    viewBox: '0 0 24 24',
    path: '<path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>'
  },
  'api-gateway': {
    viewBox: '0 0 24 24',
    path: '<path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>'
  },
  'third-party': {
    viewBox: '0 0 24 24',
    path: '<path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>'
  },
  'background-jobs': {
    viewBox: '0 0 24 24',
    path: '<path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>'
  },
  'logging': {
    viewBox: '0 0 24 24',
    path: '<path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>'
  },
  'distributed-events': {
    viewBox: '0 0 24 24',
    path: '<path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>'
  },
  'unit-test': {
    viewBox: '0 0 24 24',
    path: '<path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>'
  },
  'postman': {
    viewBox: '0 0 24 24',
    path: '<path fill="#FF6C37" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5l-3-2.5 3-2.5v5z"/>'
  },
  'selenium': {
    viewBox: '0 0 24 24',
    path: '<path fill="#00B400" d="M4 4h16v16H4V4zm3 3v10h10V7H7zm2 2h6v6H9V9z"/>'
  },
  'debugging': {
    viewBox: '0 0 24 24',
    path: '<rect width="8" height="14" x="8" y="6" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="m19 7-3 2M5 7l3 2M19 19l-3-2M5 19l3-2M20 13h-4M4 13h4M10 4l1 2M14 4l-1 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'
  },
  'root-cause': {
    viewBox: '0 0 24 24',
    path: '<circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 2v3m0 14v3M2 12h3m14 0h3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'
  },
  'regression': {
    viewBox: '0 0 24 24',
    path: '<path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>'
  },
  'git': {
    viewBox: '0 0 24 24',
    path: '<path fill="#F05032" d="M21.62 10.96l-8.58-8.58a1.5 1.5 0 0 0-2.12 0L9.1 4.2l2.67 2.67a1.78 1.78 0 0 1 2.25 2.26l2.58 2.58a1.78 1.78 0 1 1-1.07 1.05l-2.4-2.4v5.38a1.78 1.78 0 1 1-1.5 0V9.8L8.9 12.5a1.78 1.78 0 1 1-1.08-1.06L10.5 8.76 7.82 6.08 2.38 11.5a1.5 1.5 0 0 0 0 2.12l8.58 8.58a1.5 1.5 0 0 0 2.12 0l8.54-8.54a1.5 1.5 0 0 0 0-2.7z"/>'
  },
  'azure-devops': {
    viewBox: '0 0 24 24',
    path: '<path fill="#0078D7" d="M22 6.5l-6-4.5-8 3-6 5.5 3.5 11 11.5 1 5-4.5V6.5zM6.5 15.5l2-4.5 4 4.5-6 0z"/>'
  },
  'agile': {
    viewBox: '0 0 24 24',
    path: '<path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>'
  },
  'pull-requests': {
    viewBox: '0 0 24 24',
    path: '<circle cx="6" cy="6" r="3" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="6" cy="18" r="3" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="18" cy="9" r="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M6 9v6M18 12v3a3 3 0 01-3 3H9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'
  },
  'ai-agent': {
    viewBox: '0 0 24 24',
    path: '<path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>'
  },
  'prompt-eng': {
    viewBox: '0 0 24 24',
    path: '<path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>'
  },
  'code-review': {
    viewBox: '0 0 24 24',
    path: '<path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>'
  },
  'dev-automation': {
    viewBox: '0 0 24 24',
    path: '<path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="2"/>'
  },
  'html-css': {
    viewBox: '0 0 24 24',
    path: '<path fill="#E34F26" d="M4 3l1.5 17L12 22l6.5-2L20 3H4zm13.3 5.5l-.2 2.2-5.1.1v2.1l4.9-.1-.4 4.5-4.5 1.3v-2.1l2.5-.7.2-2.1-2.7.1V8.5h5.3z"/>'
  },
  'ef-core': {
    viewBox: '0 0 24 24',
    path: '<circle cx="12" cy="12" r="9" fill="none" stroke="#512BD4" stroke-width="2"/><path d="M8 12h8M12 8v8" stroke="#512BD4" stroke-width="2" stroke-linecap="round"/>'
  },
  'linq': {
    viewBox: '0 0 24 24',
    path: '<circle cx="11" cy="11" r="8" fill="none" stroke="currentColor" stroke-width="2"/><path d="m21 21-4.35-4.35" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'
  },
  'rxjs': {
    viewBox: '0 0 24 24',
    path: '<path fill="#D81B60" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path fill="#FFF" d="M16 8l-3 4-2-2-4 5h2l2.5-3 2 2 4.5-6h-2z"/>'
  },
  'github': {
    viewBox: '0 0 24 24',
    path: '<path fill="currentColor" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>'
  },
  'email': {
    viewBox: '0 0 24 24',
    path: '<path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>'
  },
  'phone': {
    viewBox: '0 0 24 24',
    path: '<path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>'
  },
  'location': {
    viewBox: '0 0 24 24',
    path: '<path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><circle cx="12" cy="11" r="3" fill="none" stroke="currentColor" stroke-width="2"/>'
  },
  'degree': {
    viewBox: '0 0 24 24',
    path: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" fill="none" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" fill="none" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" fill="none" d="M12 14v7"/>'
  },
  'verified': {
    viewBox: '0 0 24 24',
    path: '<path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>'
  },
  'download': {
    viewBox: '0 0 24 24',
    path: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" fill="none" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>'
  },
  'external-link': {
    viewBox: '0 0 24 24',
    path: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" fill="none" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>'
  },
  'chevron-right': {
    viewBox: '0 0 24 24',
    path: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" fill="none" d="M9 5l7 7-7 7"/>'
  },
  'requirements': {
    viewBox: '0 0 24 24',
    path: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" fill="none" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>'
  },
  'architecture': {
    viewBox: '0 0 24 24',
    path: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" fill="none" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>'
  },
  'development': {
    viewBox: '0 0 24 24',
    path: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" stroke="currentColor" fill="none" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>'
  },
  'testing': {
    viewBox: '0 0 24 24',
    path: '<rect width="8" height="14" x="8" y="6" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="m19 7-3 2M5 7l3 2M19 19l-3-2M5 19l3-2M20 13h-4M4 13h4M10 4l1 2M14 4l-1 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'
  },
  'deployment': {
    viewBox: '0 0 24 24',
    path: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" fill="none" d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2zM9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>'
  },
  'trophy': {
    viewBox: '0 0 24 24',
    path: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" fill="none" d="M5 3h14a2 2 0 012 2v2a5 5 0 01-5 5h-1a6 6 0 01-5 5.83V20h4a1 1 0 011 1v0a1 1 0 01-1 1H8a1 1 0 01-1-1v0a1 1 0 011-1h4v-2.17A6 6 0 017 12H6a5 5 0 01-5-5V5a2 2 0 012-2zM5 5v2a3 3 0 003 3h1V5H5zm14 0h-4v5h1a3 3 0 003-3V5z"/>'
  },
  'shield-check': {
    viewBox: '0 0 24 24',
    path: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" fill="none" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>'
  },
  'sparkles': {
    viewBox: '0 0 24 24',
    path: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" fill="none" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"/>'
  },
  'academic-cap': {
    viewBox: '0 0 24 24',
    path: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" fill="none" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" fill="none" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" fill="none" d="M12 14v7"/>'
  },
  'lightning': {
    viewBox: '0 0 24 24',
    path: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" fill="none" d="M13 10V3L4 14h7v7l9-11h-7z"/>'
  }
};
