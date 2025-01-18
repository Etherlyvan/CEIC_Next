import '@/app/styles/Home.css';
import Navbar from '@/app/components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Profile Event Lomba',
  description: 'Profile event lomba yang menarik dan informatif.',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='block'>
      <body >


        <main>
        <Navbar />
          {children}
        <Footer />
        </main>
      </body>
    </html>
  );
}
