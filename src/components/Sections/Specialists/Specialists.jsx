import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import lesley from '../../../assets/lesley.png';
import ahmad from '../../../assets/ahmad.png';
import heena from '../../../assets/heena.png';
import ankur from '../../../assets/ankur.png';
import stevens from '../../../assets/stevens.png';
import SpecialistCard from './SpecialistCard';
import { Autoplay, Pagination } from 'swiper/modules';

function Specialists () {
    
        
        const SpecialistData = [
            { img: lesley, title: 'Dr. Lesley Hull', designation: 'Medicine' },
            { img: ahmad, title: 'Dr. Ahmad Khan', designation: 'Neurologist' },
            { img: heena, title: 'Dr. Heena Sachdeva', designation: 'Orthopadics' },
            { img: ankur, title: 'Dr. Ankur Sharma', designation: 'Medicine' },
            { img: stevens, title: 'Dr. Ahmad Stevens', designation: 'Neurologist' },
            { img: lesley, title: 'Dr. Lesley Hull', designation: 'Medicine' },
            { img: ahmad, title: 'Dr. Ahmad Khan', designation: 'Neurologist' },
            { img: heena, title: 'Dr. Heena Sachdeva', designation: 'Orthopadics' },
            { img: ankur, title: 'Dr. Ankur Sharma', designation: 'Medicine' },
            { img: stevens, title: 'Dr. Ahmad Stevens', designation: 'Neurologist' }
        ]


        return (
            <Box py={4} id='find-doctors'>
                <Typography variant='h2' textAlign='center' mb={5} px={3} fontFamily={'Poppins'}>
                    Our Medical Specialist
                </Typography>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={20}
                    loop={true}
                    centeredSlides={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    modules={[Autoplay, Pagination]}
                    pagination={{ clickable: true }}
                    breakpoints={{ 767: { slidesPerView: 4 }}}>
                        {SpecialistData.map((doc, index) => (
                            <SwiperSlide key={index}>
                                <SpecialistCard
                                    img={doc.img}
                                    title={doc.title}
                                    designation={doc.designation} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
            </Box>
        )
};

export default Specialists;