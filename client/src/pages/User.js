import { useState } from 'react';
import { Grid, GridItem, Stack, Container, Text, FormControl, FormLabel, Input, ButtonGroup, Button, Tab, Tabs, TabList, TabPanel, TabPanels, } from '@chakra-ui/react';

export default function User(){
    return (
        <>
            <header>
                <HeaderContainer/>
            </header>
            <main className='main-User'>
                <Tabs align='center' variant='soft-rounded' colorScheme='blue'>
                <TabList>
                    <Tab>Login</Tab>
                    <Tab>Register</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <LoginForm/>
                    </TabPanel>
                    <TabPanel>
                        <RegistrationForm/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
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
                    <Text fontSize='3xl' fontWeight='bold'>Manage your account!</Text>
                </Container>
            </Stack>
        </GridItem>
        </Grid>
    );
}

function RegistrationForm(){
    const [regUsername, setRegUsername] = useState('')
    const [regName, setRegName] = useState('')
    const [regSurname, setRegSurname] = useState('')
    const [regMail, setRegMail] = useState('')
    const [regPassword, setRegPassword] = useState('')

const register = () =>{
    
    fetch('https://cors-anywhere.herokuapp.com/http://127.0.0.1:3001/register', {
        method: 'POST',
        body: JSON.stringify({
            usrn : regUsername.toString(),
            name: regName.toString(),
            surname: regSurname.toString(),
            mail: regMail.toString(),
            psw: regPassword.toString(),
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8; Access-Control-Allow-Headers; ',
        },
      })
         .then((response) => response.json())
         .then((data) => {console.log(data);})
         .catch((err) => {console.log(err.message);});
}

    return(
    <FormControl isRequired>
        <FormLabel>First name</FormLabel>
        <Input placeholder='First name' onChange={(e) =>{
            setRegName(e.target.value);
            }
        }/>

        <FormLabel>Surname</FormLabel>
        <Input placeholder='Surname'onChange={(e) =>{
            setRegSurname(e.target.value);
            }
        }/>

        <FormLabel>Username</FormLabel>
        <Input placeholder='Username' onChange={(e) =>{
            setRegUsername(e.target.value);
            }
        }/>

        <FormLabel>Email</FormLabel>
        <Input placeholder='Email' onChange={(e) =>{
            setRegMail(e.target.value);
            }
        }/>

        <FormLabel>Password</FormLabel>
        <Input placeholder='Password' onChange={(e) =>{
            setRegPassword(e.target.value);
            }
        }/>
        <ButtonGroup variant='outline'>
            <Button colorScheme='blue' onClick={register}>Submit</Button>
        </ButtonGroup>
    </FormControl>
    // <div>
    //     <label>Name</label>
    //     <input  onChange={(e) =>{setRegName(e.target.value);}}></input><br/>

    //     <label>Surname</label>
    //     <input  onChange={(e) =>{setRegSurname(e.target.value);}}></input><br/>

    //     <label>Username</label>
    //     <input  onChange={(e) =>{setRegUsername(e.target.value);}}></input><br/>

    //     <label>Mail</label>
    //     <input  onChange={(e) =>{setRegMail(e.target.value);}}></input><br/>

    //     <label>Password</label>
    //     <input  onChange={(e) =>{setRegPassword(e.target.value);}}></input><br/>

    //     <button onClick={register()}>Send</button>
    // </div>
    );
}

function LoginForm(){
    return(
    <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input placeholder='Email' />

        <FormLabel>Password</FormLabel>
        <Input placeholder='Password' />        
        <ButtonGroup variant='outline'>
            <Button colorScheme='blue'>Submit</Button>
        </ButtonGroup>
    </FormControl>
    );
}