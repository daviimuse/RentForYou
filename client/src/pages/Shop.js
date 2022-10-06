import { Box, Image, Badge, Grid, GridItem, Stack, Container, Text, Button,} from '@chakra-ui/react'
// Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,  Button, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, FormLabel, 
import { React, } from 'react';
//useDisclosure, Lorem 
import {BrowserRouter as Router, Link} from 'react-router-dom';

export default function Shop(){
    return (
        <>
        <header>
            <HeaderContainer/>
        </header>
        <main className='main-Shop'>
            <Items/>
            {/* <SizeExample/> */}
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
                    <Text fontSize='3xl' fontWeight='bold'>Welcome to RentForYou</Text>
                </Container>
            </Stack>
        </GridItem>
        </Grid>
    );
}



function Items() {
  const product = [{
    id : 1,
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    price: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  },
  {
    id : 2,
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    price: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  },
  {
    id : 3,
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    price: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  },
  {
    id : 4,
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    price: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  },
  {
    id : 5,
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    price: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  },
  {
    id : 6,
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    price: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  }
  ];

  return (
    <div className='items-container'>
    {product.map(function(item){
      return (
        <Box className='item' maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
          <Image src={item.imageUrl} alt={item.imageAlt}/>
          <Box p='6'>
            <Box display='flex' alignItems='baseline'>
              <Badge borderRadius='full' px='2' colorScheme='teal'>
                New
              </Badge>
              <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase' ml='2'>
                {item.beds} beds &bull; {item.baths} baths
              </Box>
            </Box>
    
            <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' noOfLines={1}>
              {item.title}
            </Box>
    
            <Box>
              {item.price}
              <Box as='span' color='gray.600' fontSize='sm'>
                / week
              </Box>

              <Box as='button' display='flex' alignItems='baseline' color='black' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase'>
                <Link to="/ItemPage" >Show More</Link>
              </Box>

            </Box>
          </Box>
        </Box>
      );
    })}
    </div>
  );
} 