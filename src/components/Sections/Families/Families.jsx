import { Box, Container, Grid, Typography } from '@mui/material';
import family from '../../../assets/family.png';

function Families () {
    return (
        <Box py={6} sx={{ background: 'linear-gradient(#E7F0FF, #E8F1FF)' }}>
            <Container>
                <Grid container alignItems='center' spacing={{xs:2, md:10}}>
                    <Grid items xs={12} md={6}>
                        <Typography fontWeight={600} color='primary.main' mb={1}>
                            CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
                        </Typography>
                        <Typography variant='h2' fontFamily={'poppins'} mb={2}>
                            Our Families
                        </Typography>
                        <Typography color='#77829D' lineHeight={2.2}>
                            We will work with you to develop individulised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries  sensitively and in the strictest confidence.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box component='img' src={family} width={1} height='auto' />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
};

export default Families;