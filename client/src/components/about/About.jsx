
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Email } from '@mui/icons-material';

const Banner = styled(Box)`
background-image: url(http://mrtaba.ir/image/bg2.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">About Me</Typography>
                <Text variant="h5">Hello! I'm currently a final year undergraduate student majoring in Electronics and Communication Engineering at MANIT (Maulana Azad National Institute of Technology),Bhopal.
                <br />
                <br/>
                    If you are interested to know more about my work, you can view some of my  projects here and connect with me on Github
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/22mig" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
               
            </Wrapper>
        </Box>
    )
}

export default About;