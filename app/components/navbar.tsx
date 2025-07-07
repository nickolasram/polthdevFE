'use client'

import { Stack, Typography, TextField, InputAdornment, InputBase } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';

// const NavSearch=styled(InputBase)(({theme})=>({
//   '& .MuiInputBase-input': {
  // transition: theme.transitions.create([
  //   'border-color',
  //   'background-color',
  //   'box-shadow',
  // ])
// }}))

const InputContainer = styled('div')({
  borderRadius: 25,
  position: 'relative',
  backgroundColor: '#00000000',
  border: '1px solid',
  borderColor: '#E0E3E7',
  fontSize: 16,
  width: 'auto',
  padding: '10px 12px'
})

const Navbar=()=>{
    return(
        <Stack direction={'row'} sx={{justifyContent: 'space-between', px: 6, py: 2}}>
            <Typography variant="h3">PolTh</Typography>
            <FormControl variant="standard">
              <InputContainer>
                <InputBase 
                  sx={{color: '#E0E3E7',}}
                  placeholder='search...'
                  endAdornment={<SearchIcon sx={{ color: '#E0E3E7' }} />}
                />
              </InputContainer>
            </FormControl>
        </Stack>
    )
}

export default Navbar;