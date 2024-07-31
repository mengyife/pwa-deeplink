import { Workbox } from 'workbox-window';

export default function ({ $config }) {
  if (process.client) {
    const wb = new Workbox('/sw.js'); // Path to your service worker

    wb.addEventListener('installed', (event) => {
      if (event.isUpdate) {
        // Notify the user or automatically refresh
        console.log('New version available. Refreshing...');
        confirm('reload now?')
        window.location.reload(); // Automatically refresh the page
      }
    });

    wb.register();
  }
}
