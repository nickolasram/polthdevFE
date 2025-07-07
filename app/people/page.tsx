'use client';

import { PersonModel } from '@/models/Person';
import { useEffect, useState } from 'react';
import {Grid, Paper, TextField, Box, Typography, Button} from '@mui/material'
import test from 'node:test';

const people =['bob', 'bill', 'george']

const testSend=(person: PersonModel)=>{
    const url = 'http://localhost:8080/people/'; // Replace with your API endpoint
    fetch(url, {
        method: 'POST', // Specify the HTTP method as POST
        headers: {
          'Content-Type': 'application/json' // Indicate that the body contains JSON data
        },
        body: JSON.stringify(person) // Convert the JavaScript object to a JSON string
      })
      .then(response => {
        if (!response.ok) {
          // Handle HTTP errors (e.g., 404 Not Found, 500 Internal Server Error)
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Parse the JSON response body
      })
      .then(responseData => {
        console.log('Success:', responseData); // Log the successful response data
      })
      .catch(error => {
        console.error('Error:', error); // Log any errors that occurred during the fetch operation
      });
}

const PersonText=({person}: {person: PersonModel})=>{
    return(
        <>
            <Typography>
                {person.prefix} {person.firstname} {person.middlename} {person.lastname} {person.suffix}
            </Typography>
            { (person.title || person.nickname) &&
                <Typography>
                    {person.title} {person.title&&person.nickname?'·':''} {person.nickname}
                </Typography>
            }    
        </>
    )
}

const Page =()=>{
    const [people, setPeople] = useState<null|PersonModel[]>(null)
    const testGet=()=>{
        const url = 'http://localhost:8080/people/'; // Replace with your API endpoint
        fetch(url, {
            method: 'GET',
        })
        .then(response => {
            if (!response.ok) {
            // Handle HTTP errors (e.g., 404 Not Found, 500 Internal Server Error)
            throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // Parse the JSON response body
        })
        .then(response => {
            setPeople(response.data) 
        })
        .catch(error => {
            console.error('Error:', error); // Log any errors that occurred during the fetch operation
        });
    }

    useEffect(() => {
        testGet() 
    }, []);

    const handleSubmit=(e)=>{
        e.preventDefault()
        const newPerson: PersonModel={
            prefix: e.target.elements.prefix.value,
            firstname: e.target.elements.firstName.value,
            middlename: e.target.elements.middleName.value,
            lastname: e.target.elements.lastName.value,
            suffix: e.target.elements.suffix.value,
            nickname: e.target.elements.nickname.value,
            title: e.target.elements.title.value
        }
        testSend(newPerson)
    }
    return(
        <Grid container>
            <Grid size={5} offset={1}>
                {
                    people && 
                    <>
                        {people.map((person, index)=>{
                            return(
                                <PersonText key={index} person={person} />
                            )
                        })}                    
                    </>
                }
                <Button 
                    variant='contained' 
                    onClick={()=>{testGet()}}
                    >
                    Get
                </Button>
            </Grid>
            <Grid size={5}>
                {/* <FormControl>
                    <FormLabel htmlFor="prefix">Prefix</FormLabel>
                    <TextField />
                </FormControl> */}
                <Paper sx={{p: 2}}>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}
                    >
                        <Box 
                            sx={{display: 'flex', width: '100%', gap: 2}}>
                            <TextField
                                sx={{width: '20%'}}
                                placeholder='prefix'
                                name='prefix'
                            />
                        <TextField
                                sx={{width: '80%'}}
                                placeholder='first name'
                                name='firstName'
                            />

                        </Box>
                        <Box 
                            sx={{display: 'flex', width: '100%', justifyContent: 'center'}}>
                            <TextField
                                sx={{width: '100%'}}
                                placeholder='middle name'
                                name='middleName'
                            />
                        </Box>
                        <Box 
                            sx={{display: 'flex', width: '100%', gap: 2}}>
                            <TextField
                                sx={{width: '80%'}}
                                placeholder='last name'
                                name='lastName'
                            />
                            <TextField
                                sx={{width: '20%'}}
                                placeholder='suffix'
                                name='suffix'
                            />
                        </Box>
                        <Box 
                            sx={{display: 'flex', width: '100%', justifyContent: 'center'}}>
                            <TextField
                                sx={{width: '100%'}}
                                placeholder='nickname'
                                name='nickname'
                            />
                        </Box>
                        <Box 
                            sx={{display: 'flex', width: '100%', justifyContent: 'center'}}>
                            <TextField
                                sx={{width: '100%'}}
                                placeholder='title'
                                name='title'
                            />
                        </Box>
                        {/* <Box 
                            sx={{display: 'flex', width: '100%', justifyContent: 'center'}}>
                            <Typography variant='body2' color='#888'>
                            or
                            </Typography>
                        </Box>
                        <Box 
                            sx={{display: 'flex', width: '100%', justifyContent: 'center'}}>
                            <TextField 
                                sx={{width: '100%'}}
                                placeholder='mononym'
                            />
                        </Box> */}
                        <Box 
                            sx={{display: 'flex', width: '100%', justifyContent: 'end'}}>
                            <Button 
                                variant='contained' 
                                sx={{width: '18%'}}
                                type="submit"
                                >Add</Button>
                        </Box>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Page;