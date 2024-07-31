export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'my-nuxt-pwa',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  modules: [
    '@nuxtjs/pwa',
  ],
  pwa: {
    manifest: {
      name: 'My Nuxt PWA',
      short_name: 'NuxtPWA',
      description: 'My awesome Progressive Web App!',
      lang: 'en',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#4DBA87',
      icons: [
        {
          src: '/icon.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    workbox: {
      // Set the service worker update strategy
      skipWaiting: true,       // Automatically activate the new service worker
      clientsClaim: true,      // Immediately take control of all clients
      runtimeCaching: [
        {
          urlPattern: 'https://api.example.com/.*',
          handler: 'NetworkFirst',
          method: 'GET',
        },
        {
          urlPattern: '/.*',
          handler: 'NetworkFirst',
          method: 'GET',
        },
        // Add more runtime caching strategies here as needed
      ],
      // Additional Workbox options
      // Example: configure other settings like `offlineAnalytics`, `skipWaiting`, etc.
      offlineAnalytics: true,  // Optionally track analytics while offline
      skipWaiting: true,       // Skip waiting and activate new service workers immediately
    },
    icon: {
      source: './static/icon.png',
    },
  },
}
