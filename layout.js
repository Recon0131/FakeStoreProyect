import { Inter } from 'next/font/google'
import './globals.css'
import Dashboard from './components/dashboard.js'  
import StateCompo from './context/StateCompo'
import StateSearch from './context/StateSearch'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Computer Shop',
  description: 'Online Computer Shop',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <StateSearch>
        <StateCompo>
        <Dashboard/>{children}
        </StateCompo>
        </StateSearch>

        </body>
    </html>
  )
}
