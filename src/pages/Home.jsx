import Hero from '../components/Hero'
import EmpoweringStudents from '../components/EmpoweringStudents'
import UnlockPotential from '../components/UnlockPotential'
import FacultySection from '../components/FacultySection'
import CTABanner from '../components/CTABanner'
import ServicesCarousel from '../components/ServicesCarousel'


const Home = () => {
  return (
    <main>
      <Hero />
      <EmpoweringStudents />
      <ServicesCarousel />
      {/* <FacultySection /> */}
      <UnlockPotential />
      <CTABanner />
    </main>
  );
};

export default Home;
