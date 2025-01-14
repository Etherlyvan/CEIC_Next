// app/page.js
import Hero from '@/app/components/Hero';
import About from './components/About';
import Mission from './components/Mission';
import EventList from './components/EventList';
export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <section id="about" className="py-16">
        <About />
      </section>
      <section id="mission" className="py-16">
        <Mission />
      </section>
      <section id="events" className="py-16">
        <EventList />
      </section>
    </main>
  );
}