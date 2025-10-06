import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Chip, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import { FaFileDownload } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import Edit from './Edit';


function Preview({resumeData,setResumeData}) {

  const { personalDetails, contactDetails, educationDetails, workExperience, skills, summary } = resumeData

  return (
    <div>

      <Box sx={{display: 'flex' , justifyContent: 'flex-end', marginTop: '20px', padding: '10px'}}>

        <Tooltip title="Download">
          <Button><FaFileDownload className='fs-2' /></Button>
        </Tooltip>
        
        <Edit/>
        
        <Link to={'/history'}>
          <Tooltip title="History">
          <Button><FaHistory className='fs-2' /></Button>
        </Tooltip>
        </Link>
        
      </Box>
      <Box sx={{ display: 'flex',padding: '10px', flexWrap: 'wrap', '& >: not(style)': { m: 1, width: 550, height: 'auto', } }}>

        <Paper elevation={10} sx={{ padding: '30px', }}>
          <Typography variant='h4' align='center' margin={'20px'}>
            {personalDetails.fullName}
          </Typography>

          <Typography variant='h6' align='center' margin={'20px'} color='blue' >
            Title
          </Typography>

          <Typography variant='body' display={'flex'} justifyContent={'space-evenly'} align='center' margin={'20px'}  >
            9876576543 | user@gmail.com | Location
          </Typography>

          <Typography variant='body' align='center' margin={'20px'} color='blue' display={'flex'} justifyContent={'space-evenly'} >
            <Link href={'#'} target='_blank'>Github</Link>
            <Link href={'#'} target='_blank'>LinkedIn</Link>
            <Link href={'#'} target='_blank'>Portfolio</Link>
          </Typography>
          <Divider>Summary</Divider>

          <Typography textAlign={'justify'} variant='body2'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores itaque hic tempore numquam deserunt ullam, voluptas officia aliquam alias laborum. Soluta architecto nihil, dicta tempore vero dolore alias voluptatum ad.
          </Typography>

          <Divider sx={{ marginTop: '20px' }}>Education</Divider>

          <Typography variant='body' display={'flex'} justifyContent={'space-evenly'} align='center' margin={'20px'}  >
            Course <br />
            College | University | Year
          </Typography>

          <Divider sx={{ marginTop: '20px' }}>Experience</Divider>

          <Typography variant='body' display={'flex'} justifyContent={'space-evenly'} align='center' margin={'20px'}  >
            Title <br />
            Company | Location | Duration
          </Typography>

          <Divider sx={{ marginTop: '20px' }}>Skills</Divider>

          <Typography className='mb-3' variant='body' display={'flex'} justifyContent={'space-evenly'} align='center' margin={'20px'} flexWrap={'wrap'}  >
            <Button variant="outlined" className='mb-3'>REACT</Button>
              <Button variant="outlined" className='mb-3'>ANGULAR</Button>
              <Button variant="outlined" className='mb-3'>NODEJS</Button>
              <Button variant="outlined" className='mb-3'>EXPRESS</Button>
              <Button variant="outlined" className='mb-3'>MONGODB</Button>
              <Button variant="outlined" className='mb-3'>GIT</Button>
              <Button variant="outlined" className='mb-3'>HTML</Button>
              <Button variant="outlined" className='mb-3'>CSS</Button>
              <Button variant="outlined" className='mb-3'>BOOTSTRAP</Button>
              <Button variant="outlined" className='mb-3'>TAILWIND</Button>
          </Typography>
        </Paper>
      </Box>

    </div>
  )
}

export default Preview
