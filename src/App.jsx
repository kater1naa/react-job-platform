import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards></HomeCards>
      <JobListings></JobListings>
    </>
  );
};

export default App;
