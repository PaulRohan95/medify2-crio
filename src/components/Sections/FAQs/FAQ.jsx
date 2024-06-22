import { Box, Container, Grid, Typography } from '@mui/material';
import faqImg from '../../../assets/faqs.png';
import MyAccordions from '../../Accordions/Accordions';

function FAQ () {

    const faqs = [
        {
            question: 'Why choose our medical facility for your family?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus molestias officia perspiciatis quod saepe? Ullam nulla, eius ratione quae dolore quidem error veniam sunt consectetur recusandae fugit fuga, libero quaerat!'
        },
        {
            question: 'Why we are different form others?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus molestias officia perspiciatis quod saepe? Ullam nulla, eius ratione quae dolore quidem error veniam sunt consectetur recusandae fugit fuga, libero quaerat!'
        },
        {
            question: 'Trusted and experienced senior care and love',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus molestias officia perspiciatis quod saepe? Ullam nulla, eius ratione quae dolore quidem error veniam sunt consectetur recusandae fugit fuga, libero quaerat!'
        },
        {
            question: 'Hpw to get appointment for emergency cases?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus molestias officia perspiciatis quod saepe? Ullam nulla, eius ratione quae dolore quidem error veniam sunt consectetur recusandae fugit fuga, libero quaerat!'
        },
    ]

    return (
        <Box py={4}>
            <Container maxWidth='x1'>
                <Typography color='primary.main' fontWeight={600} textAlign='center' mb={1}>
                    Get Your Answer
                </Typography>
                <Typography textAlign='center' variant='h2' mb={8} fontFamily={'Poppins'} >
                    Frequently Asked Questions
                </Typography>
                <Grid container alignContent='center' spacing={5}>
                    <Grid items xs={12} md={6}>
                        <Box src={faqImg} component='img' width={1} height='auto' />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box maxWidth={450}>
                            <MyAccordions data={faqs} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
};

export default FAQ;