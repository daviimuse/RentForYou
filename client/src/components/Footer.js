import { LinkIcon } from '@chakra-ui/icons';
import { Box, Text } from '@chakra-ui/react';
import React from 'react';

export default function Footer(){
    return (
        <section className='footer'>
            <Box>
                <Text>Author: daviimuse </Text><br/>
                <LinkIcon/><a href="https://github.com/daviimuse">GitHub Page</a>
            </Box>
        </section>
    );
}
