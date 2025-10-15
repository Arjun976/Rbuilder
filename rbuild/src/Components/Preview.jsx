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
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { addHistoryAPI } from '../services/allAPI';


function Preview({resumeData,setresumeData,resumeId,setresumeId}) {

//pdf generation
  const { personalDetails, contactDetails, educationDetails, workExperience, skills, summary } = resumeData
  const handleDownload = async () => {
  const input = document.getElementById("result");

  try {
    // Capture as image
    const canvas = await html2canvas(input, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    // Generate PDF
    const pdf = new jsPDF();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("download.pdf");

    // Prepare date and time
    const date = new Date();
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString();

    // Add snapshot image
    const newHistoryEntry = {
      ...resumeData,
      date: formattedDate,
      time: formattedTime,
      previewImage: imgData, // 👈 Add this
    };

    // Save to backend
    const response = await addHistoryAPI(newHistoryEntry);
    console.log("✅ History saved successfully:", response.data || response);
  } catch (error) {
    console.error("❌ Error while saving history:", error);
  }
};


 
  return (
    <div>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px', padding: '10px' }}>
  <Tooltip title="Download">
    <Button onClick={handleDownload}><FaFileDownload className='fs-2' /></Button>
  </Tooltip>

  {/* ✅ Pass props to Edit */}
  <Edit resumeData={resumeData} setresumeData={setresumeData} />

  <Link to={'/history'}>
    <Tooltip title="History">
      <Button><FaHistory className='fs-2' /></Button>
    </Tooltip>
  </Link>
</Box>

      <Box
  sx={{
    display: 'flex',
    padding: '10px',
    flexWrap: 'wrap',
    justifyContent: 'center', // center horizontally
    '& > :not(style)': {
      m: 1,
      width: 550,
      height: 'auto',
    },
  }}
>

        <Paper elevation={10} sx={{ padding: '30px', }} id="result">
          <Typography variant='h4' align='center' margin={'20px'}>
            {personalDetails.fullName!==""? personalDetails.fullName:"Full Name"}
          </Typography>

          <Typography variant='h6' align='center' margin={'20px'} color='blue' >
            {personalDetails.jobTitle!==""?personalDetails.jobTitle:"Job Title"}
          </Typography>
          <Typography variant='h6' align='center' margin={'20px'} color='gray' >
            {personalDetails.location!==""?personalDetails.location:"Location"}
          </Typography>

          <Typography
  variant="body1"
  display="flex"
  justifyContent="center"
  align="center"
  margin="20px"
  gap={2} // adds spacing between items
>
  {contactDetails.email !== "" ? contactDetails.email : "SAMPLE@gmail.com"} |
  {contactDetails.phoneNumber !== "" ? contactDetails.phoneNumber : "Phone"} |
  {contactDetails.github !== "" ? contactDetails.github : "github"}|
    {contactDetails.linkedIn !== "" ? contactDetails.linkedIn : "Linkedin"}|
  {contactDetails.portfolio !== "" ? contactDetails.portfolio : "portfolio"}

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
            {educationDetails.course!==""?educationDetails.course:"Course"} <br />
            {educationDetails.college!==""?educationDetails.college:"College"} |
             {educationDetails.university!==""?educationDetails.university:"University"} |
              {educationDetails.passout!==""?educationDetails.passout:"Year"}
          </Typography>

          <Divider sx={{ marginTop: '20px' }}>Experience</Divider>

          <Typography variant='body' display={'flex'} justifyContent={'space-evenly'} align='center' margin={'20px'}  >
           {workExperience!==""?workExperience.jobTitle:"JOB TITLE"} <br />
           {workExperience!==""?workExperience.company:"Company"} | 
           {workExperience!==""?workExperience.location:"Location"} | 
           {workExperience!==""?workExperience.duration:"Duration"}
          </Typography>

          <Divider sx={{ marginTop: '20px' }}>Skills</Divider>
          
          <Typography variant='body2' align='center' margin={'10px'}>
            {summary!==""?summary:"A brief summary about your skills"}
          </Typography>
          <Typography variant='body' display={'flex'} justifyContent={'center'} align='center' margin={'20px'} gap={1} flexWrap={'wrap'}  >
            {skills.length > 0 ? skills.map((skill, index) => (
              <Chip key={index} label={skill} color="primary" variant="outlined" />
            )) : "No skills added"}
          </Typography>
          

          
        </Paper>
      </Box>

    </div>
  )
}

export default Preview
