import { Box, Stack, Typography } from '@mui/material';

function Icons ({ img, title, bgColor, active = false, shadow = false }) {
    return (
        <Stack
            spacing={2}
            alignItems='center'
            bgColor={active ? 'rgba(42,167,255,0.08)' : bgColor}
            p={3}
            borderRadius={3}
            border={active ? '1px solid #2AA7FF' : '0'}
            boxShadow={shadow ? '0 0 24px rgba(0,0,0,0.09)' : 'none'}>
                <Box component='img' src={img} height={60} width={60} />
                <Typography
                    color={active ? 'primary.main' : '#ABB6C7'}
                    fontSize={18}
                    fontWeight={active ? 600 : 400}>{title}</Typography>
            </Stack>
    )
};

export default Icons;