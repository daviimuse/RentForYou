import { Box, SkeletonText, Avatar, AvatarGroup, Stack, Text, Container, Grid, GridItem, } from '@chakra-ui/react'

export default function Contacts(){
    return (
        <>
            <header>
                <HeaderContainer/>
            </header>
            <main className='main-Contacts'>
                <MainContainer/>
            </main>
        </>
    );
}

function HeaderContainer(){
    return(
        <Grid
        templateAreas={`"header header"
                        "nav main"
                        "nav footer"`}
        gridTemplateRows={'50px 1fr 30px'}
        gridTemplateColumns={'0px 1fr'}
        h='200px'
        gap='0'>
        <GridItem pl='2' area={'header'}>
            <Stack h='100px' p={4}>
                <Container>
                    <Text fontSize='3xl' fontWeight='bold'>Contacts</Text>
                </Container>
            </Stack>
        </GridItem>
        </Grid>
    );
}

function MainContainer(){
    return (
        <Grid
        templateAreas={`"header header"
                        "nav main"
                        "nav footer"`}
        gridTemplateColumns={'0px 1fr'}
        fontWeight='bold'>
        <GridItem className='contacts-container' pl='2' area={'footer'}>
            <Stack h='100px' p={4}>
                <Box padding='6' boxShadow='lg' bg='white'>
                    <AvatarGroup spacing='1rem'>
                        <Avatar bg='teal.500' />
                        </AvatarGroup>
                    <SkeletonText mt='4' noOfLines={4} spacing='4' />
                </Box>
            </Stack>
        </GridItem>
        </Grid>
    );
}