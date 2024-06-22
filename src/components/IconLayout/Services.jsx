import { Box, Grid, Typography } from '@mui/material';
import doctor from '../../assets/Doctor.png';
import pharmacy from '../../assets/Drugstore.png';
import hospital from '../../assets/Hospital.png';
import medical from '../../assets/Capsule.png';
import ambulance from '../../assets/Ambulance.png';
import IconCard from '../IconCard/IconCard';
import { useMemo } from 'react';

function Services () {

    const Facilities = useMemo (
        () => [
            { img: doctor, title: 'Doctors' },
            { img: pharmacy, title: 'Labs' },
            { img: hospital, title: 'Hospital', active: true },
            { img: medical, title: 'Medical Store' },
            { img: ambulance, title: 'Ambulance' },
        ], []
    );

    return (
        <Box> 
            <Typography
                component='h4'
                fontSize={20}
                color='#102851'
                fontWeight={500}
                textAlign='center'
                mb={2}>
                    You may be looking for
                </Typography>
                <Grid container columnSpacing={{ xs: 1, md: 2 }} justifyContent={'center'}>
                    {Facilities.map((facility) => (
                        <Grid item key={facility.title} xs={4} md={2.4} >
                            <IconCard img={facility.img} title={facility.title} active={facility.active || false} bgColor='#FAFBFE' />
                        </Grid>
                    ))}
                </Grid>
        </Box>
    )
}

export default Services;