import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from 'react-query';
import 'antd/dist/antd.css'; 
// export function reportWebVitals(metric) {
//   console.log("metric", metric)
// }
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return <QueryClientProvider client={queryClient}><Component {...pageProps} /></QueryClientProvider>
}

export default MyApp
