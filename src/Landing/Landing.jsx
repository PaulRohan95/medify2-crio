import { Container, Box, Stack } from '@mui/material';
import HeroSection from '../components/HeroSection/HeroSection';
import SearchLocation from '../components/SearchLocation/SearchLocation';
import Navbar from '../components/Navbar/Navbar';
import Specialization from '../components/Sections/Specializations/Specializations';
import Services from '../components/IconLayout/Services';
import Offers from '../components/Sections/Offers/Offers';
import Specialists from '../components/Sections/Specialists/Specialists';
import PatientCaring from '../components/Sections/PatientCaring/PatientCaring';
import Blogs from '../components/Sections/Blogs/Blogs';
import Families from '../components/Sections/Families/Families';
import FAQ from '../components/Sections/FAQs/FAQ';



function Landing () {
  return (
    <Box >
      <Box sx={{ background: "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)" }} mb={4}>
        <Navbar />
        <Container maxWidth='x1'>
          <HeroSection />
          <Stack
              p={{ xs: 2.5, md: 8 }}
              mt={{ xs: -2, md: 0, lg: -6, xl: -10 }}
              position='relative'
              zIndex={99}
              bgcolor='#ffff'
              borderRadius='15px'
              spacing={10}
              boxShadow='0 0 12px rgba(0,0,0,0.1)'
              >
                <SearchLocation />
                <Services />
              </Stack>
        </Container>
      </Box>
      <Offers />
      <Specialization />
      <Specialists />
      <PatientCaring />
      <Blogs />
      <Families />
      <FAQ />
    </Box>
  )
}

export default Landing;
