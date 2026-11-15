import './App.css';
import Header   from './components/Header/Header';
import Hero      from './components/Hero/Hero';
import Services  from './components/Services/Services';
import Gallery   from './components/Gallery/Gallery';
import About     from './components/About/About';
import Booking   from './components/Booking/Booking';
import Location  from './components/Location/Location';
import Footer    from './components/Footer/Footer';
import WhatsAppFab from './components/WhatsAppFab/WhatsAppFab';

export default function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Booking />
        <Location />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
