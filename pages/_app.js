import Layout from './layout';
import { QueryClient, QueryClientProvider } from 'react-query';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/globals.css';
import { useEffect } from 'react';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      // Customize options as needed
      duration: 1000,
      offset: 120,
    });

    // Add event listeners for global AOS refresh
    const eventsToTriggerRefresh = ['resize', 'scroll']; // Adjust events as needed
    eventsToTriggerRefresh.forEach((event) => {
      window.addEventListener(event, AOS.refresh);
    });

    // Cleanup function to remove event listeners
    return () => {
      eventsToTriggerRefresh.forEach((event) => {
        window.removeEventListener(event, AOS.refresh);
      });
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}

export default MyApp;
