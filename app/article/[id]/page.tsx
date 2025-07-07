'use client'
import person_icon from '@/public/images/person-icon.png'
import { Card, CardHeader, Typography, Grid, CardMedia, CardContent } from "@mui/material";
import { MuiMarkdown } from 'mui-markdown';
import data from '@/mockData.json'
const article = data.articles[0]

const Page =()=>{
    return (
        <Grid 
            container 
            spacing={2} 
            columns={24}
        >
            <Grid 
                size={3}
                pl={2}
                pr={1}
                mt={11} 
                sx={{
                    borderRight: '1px solid #ffffff88',
                  }}>
                {/* <MuiMarkdown>{`# Hello markdown!`}</MuiMarkdown> */}
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum sem a ligula tempor venenatis. Vestibulum quam est, tincidunt fermentum tortor sit amet, posuere bibendum metus. Proin efficitur aliquet nisi, eget commodo leo iaculis id. Sed a libero hendrerit, finibus mauris ac, porttitor ex.</p>
            </Grid>
            <Grid 
                size={16}
                px={1}
                >
                <Typography 
                    variant="h1" 
                    fontSize={64}
                    pb={1}
                    mb={2}
                    sx={{
                        borderBottom: '1px solid #ffffff88'
                    }}
                    >
                    Article Heading
                </Typography>
                <MuiMarkdown>{article}</MuiMarkdown>
                {/* <p>Aliquam arcu enim, facilisis in gravida sed, ornare vel metus. Phasellus sit amet ante maximus lectus imperdiet mollis et ac magna. Nulla lacus metus, viverra vel est nec, rutrum ullamcorper ante. Aliquam a nibh venenatis, suscipit lorem quis, pulvinar neque. Vestibulum vitae scelerisque dui. Donec faucibus, nisl eu ultrices commodo, velit tellus faucibus lorem, eu sodales urna dolor eu ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam sed eros consectetur, ultricies sem non, dapibus nisl. Ut feugiat mi mauris, non pulvinar ex volutpat non. Duis ex elit, vulputate in libero vel, condimentum posuere sem. In luctus vitae ante non ullamcorper. Duis volutpat imperdiet quam, a tristique mi fermentum ac. Donec eget nibh vel orci tempor laoreet. Vestibulum tincidunt ante purus, in euismod diam varius sed.</p> */}
            </Grid>
            <Grid 
                size={5}
                pr={2}
                >
                <Card>
                    <CardHeader 
                        title="Article Heading"
                        subheader="Last edited September 14, 2016"
                    />
                    <CardMedia
                        component="img"
                        image={person_icon.src}
                        alt="Paella dish"
                        sx={{
                            filter: 'sepia(100%)'
                        }}
                    />
                    <CardContent>
                        <Typography variant="body2" >
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Page;