import {Grid, Paper, Box, Container} from '@mui/material';

const Page=()=>{
    return(
        <Grid container>
            <Grid size={5} offset={1}>
                <Paper sx={{width: '100%', aspectRatio: '1/1'}}>
                    <Box
                        sx={{width: '100%', height: '100%', padding: '1rem'}}
                    >
                        <Container
                            sx={{border: '2px solid black', width: '100%', height: '100%'}}
                        >
                            left container
                        </Container>
                    </Box>                    
                </Paper>
            </Grid>
            <Grid size={5}>
                <Container>right container</Container>
            </Grid>
        </Grid>
    )
}

export default Page;