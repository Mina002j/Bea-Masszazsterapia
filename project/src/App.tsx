import { I18nProvider } from '@/i18n/I18nContext';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Pricing } from '@/components/Pricing';
import { BookingForm } from '@/components/BookingForm';
import { FAQ } from '@/components/FAQ';
import { LocationContact } from '@/components/LocationContact';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-[#fdf9f8] overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Pricing />
          <BookingForm />
          <FAQ />
          <LocationContact />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}

export default App;
