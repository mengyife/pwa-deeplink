export default function ({ app }) {
    if (process.client) {
      window.addEventListener('load', () => {
        const url = new URL(window.location.href);
        const path = url.pathname;
  
        // Handle deep link routing
        if (path.startsWith('/posts/')) {
          app.router.push(path); // Navigate to the deep link
        }
      });
    }
  }
  