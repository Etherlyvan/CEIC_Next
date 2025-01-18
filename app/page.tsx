// app/page.js
import Hero from '@/app/components/Hero';
import About from './components/About';
import Mission from './components/Mission';
import EventList from './components/EventList';
export default function HomePage() {
  return (
    <main>
      
      <Hero />
      <section id="about" >
        <About />
      </section>
      <section id="mission" >
        <Mission />
      </section>
      <section id="events" >
        <EventList />
      </section>
    </main>
  );
}