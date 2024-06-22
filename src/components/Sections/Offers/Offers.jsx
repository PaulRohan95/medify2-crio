import { Box, Container } from '@mui/material';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Offer1 from '../../../assets/Offer1.png';
import Offer2 from '../../../assets/Offer2.png';

function Offers() {
    return (
        <Box py={6}>
            <Container maxWidth='x1'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    breakpoints={{ 767: { slidesPerView: 3}}}>
                        <SwiperSlide>
                            <Box component={'img'} src={Offer1} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box component={'img'} src={Offer2} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box component={'img'} src={Offer1} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box component={'img'} src={Offer2} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box component={'img'} src={Offer1} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box component={'img'} src={Offer2} />
                        </SwiperSlide>
                    </Swiper>
            </Container>
        </Box>
    )
};

export default Offers;