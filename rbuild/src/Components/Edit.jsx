import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import { MdEditDocument } from "react-icons/md";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { ButtonBase, Chip, Stack } from '@mui/material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight: '80vh',
  overflowY: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Edit() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Tooltip title="Edit">
        <Button onClick={handleOpen}><MdEditDocument className='fs-2' /></Button>
      </Tooltip>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Your Details
          </Typography>

          <div>
            <h3 className='text-center'>Personal Details</h3>
            <Box
              component="form"
              sx={{ '& > :not(style)': { m: 1, width: '55ch' } }}
              noValidate
              autoComplete="off"
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <TextField id="outlined-basic" label="Full Name" variant="outlined" />
              <br />
              <TextField id="outlined-basic" label="Job Title" variant="outlined" />
              <br />
              <TextField id="outlined-basic" label="Location" variant="outlined" />

            </Box>

          </div>

          <div>
            <h3 className='text-center'>Contact Details</h3>
            <Box
              component="form"
              sx={{ '& > :not(style)': { m: 1, width: '55ch' } }}
              noValidate
              autoComplete="off"
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <TextField id="outlined-basic" label="Email" variant="outlined" />

              <TextField id="outlined-basic" label="Phone Number" variant="outlined" />

              <TextField id="outlined-basic" label="Github Profile" variant="outlined" />

              <TextField id="outlined-basic" label="LinkedIn Profile" variant="outlined" />

              <TextField id="outlined-basic" label="Portfolio" variant="outlined" />
            </Box>

          </div>

          <div>
            <h3 className='text-center'>Education details</h3>
            <Box
              component="form"
              sx={{ '& > :not(style)': { m: 1, width: '55ch' } }}
              noValidate
              autoComplete="off"
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <TextField id="outlined-basic" label="Course name" variant="outlined" />

              <TextField id="outlined-basic" label="College Name" variant="outlined" />

              <TextField id="outlined-basic" label="University" variant="outlined" />

              <TextField id="outlined-basic" label="Year of Passout" variant="outlined" />

            </Box>

          </div>

          <div>
            <h3 className='text-center'>Work Experience</h3>
            <Box
              component="form"
              sx={{ '& > :not(style)': { m: 1, width: '55ch' } }}
              noValidate
              autoComplete="off"
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <TextField id="outlined-basic" label="Job or Internship" variant="outlined" />

              <TextField id="outlined-basic" label="Company Name" variant="outlined" />

              <TextField id="outlined-basic" label="Location" variant="outlined" />

              <TextField id="outlined-basic" label="Duration" variant="outlined" />

            </Box>

          </div>

          <div>
            <h3 className='text-center'>Skills</h3>
            <Box
              component="form"
              sx={{ '& > :not(style)': { m: 1, width: '55ch' } }}
              noValidate
              autoComplete="off"
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <TextField id="outlined-basic" label="Add Skills" variant="outlined" />

              <Stack spacing={2} direction="row">
                <Button variant="contained">ADD</Button>
              </Stack>

            </Box>

            <Box sx={{ '& > :not(style)': { m: 1, width: '50ch' } }}
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <h4 className='text-center'>Suggestions:</h4>

              <Stack spacing={4}
                direction="row"
                display={'flex'}
                justifyContent={'space-around'}
                flexWrap={'wrap'}
                width={'200px'}
              >
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
              </Stack>
            </Box>

          </div>

          <div>
            <h3 className='text-center'>Professional Summary</h3>
            <TextField
              id="outlined-multiline-static"
              label="Professional Summary"
              multiline
              rows={6}
              defaultValue=""
              sx={{ '& > :not(style)': { m: 1, ml: 10, width: '50ch', marginLeft: '50px' } }}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button variant='contained'>Update</Button>
          </div>

        </Box>
      </Modal>
    </div>
  )
}

export default Edit
