import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Icons from '../../IconCard/IconCard';
import dentistry from '../../../assets/dentistry.png';
import primary from '../../../assets/primary-care.png';
import cardiology from '../../../assets/cardiology.png';
import mri from '../../../assets/mri.png';
import bloodTest from '../../../assets/blood-test.png';
import pisc from '../../../assets/piscologist.png';
import laboratory from '../../../assets/laboratory.png';
import xray from '../../../assets/x-ray.png';

function Specialization() {

    const data = [
        { icon: dentistry, title: 'Dentistry' },
        { icon: primary, title: 'Primary Care' },
        { icon: cardiology, title: 'Cardiology' },
        { icon: mri, title: 'MRI Resonance' },
        { icon: bloodTest, title: 'Blood Test' },
        { icon: pisc, title: 'Piscologist' },
        { icon: laboratory, title: 'Laboratory' },
        { icon: xray, title: 'X-Ray' }
    ]
    
    return (
        <Box py={6} sx={{ background: "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 100%, #fff 10%)" }} mb={4}>
            <Container sx={{ textAlign: 'center' }}>
                <Typography variant='h2' mb={6} fontFamily='Poppins'>
                    Find by specialization
                </Typography>

                <Grid container spacing={{ xs: 1, md: 3 }} mb={5} justifyContent={'center'}>
                    {data.map(item => (
                        <Grid item xs={4} md={3} key={item.title}>
                            <Icons img={item.icon} title={item.title} bgColor={'#FFFFFF'} shadow={true} />
                        </Grid>
                    ))}
                </Grid>
                <Button variant='contained' size='large' 
                    sx={{ width: '147px', height: '50px' }}>
                    View All
                </Button>
            </Container>
        </Box>
    )
};

export default Specialization;