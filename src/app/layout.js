import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "./components/ThemeProvider";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'M SUHIAB',
  description: 'Web Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
