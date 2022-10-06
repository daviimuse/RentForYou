import { Stack, Text, Container, Grid, GridItem, } from "@chakra-ui/react";

export default function ItemPage(){
return (
    <>
        <header>
            <HeaderContainer />
        </header>
        <main className="main-ItemPage">
            <MainContainer />
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
                <Text fontSize='3xl' fontWeight='bold'>Item Title</Text>
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
    <GridItem className='stats-container' pl='2' area={'footer'}>
        <Stack h='100px' p={4}>
            {/* Insert Code Here */}
        </Stack>
    </GridItem>
    </Grid>
    );
}