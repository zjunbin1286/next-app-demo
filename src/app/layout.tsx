import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import '@ant-design/v5-patch-for-react-19';
import 'antd/dist/reset.css';
import AntdProvider from './AntdProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.js Sidebar Demo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-8">
            <AntdProvider>
              {children}
            </AntdProvider>
          </main>
        </div>
      </body>
    </html>
  )
}