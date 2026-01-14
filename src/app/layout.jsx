import './globals.css'

export const metadata = {
  title: 'DonorConnect - Donor Management Platform',
  description: 'A comprehensive donor retention platform for nonprofits',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
