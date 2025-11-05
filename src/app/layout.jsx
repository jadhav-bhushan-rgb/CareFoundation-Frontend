import './globals.css'

export const metadata = {
  title: 'Care Foundation - Crowdfunding Platform',
  description: 'Help those in need through our crowdfunding platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
