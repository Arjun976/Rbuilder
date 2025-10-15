import React, { useState } from 'react'
import { Stack, Box } from '@mui/material'
import Steps from './Steps'
import Preview from './Preview'

function Form() {
  const [finished, setfinished] = useState(false)
  const[resumeId,setresumeId] = useState("")


  const [resumeData, setresumeData] = useState({
    personalDetails: {
      fullName: "",
      jobTitle: "",
      location: "",
    },
    contactDetails: {
      email: "",
      phoneNumber: "",
      github: "",
      linkedIn: "",
      portfolio: ""
    },
    educationDetails: {
      course: "",
      college: "",
      university: "",
      passout: "",
    },
    workExperience: {
      jobTitle: "",
      company: "",
      location: "",
      duration: "",
    },
    skills: [],
    summary: ""
  })

  return (
    <div>
      {finished ? (
        <Box>
          <Preview
            resumeData={resumeData}
            setresumeData={setresumeData}
            resumeId={resumeId}
            setresumeId={setresumeId}
          />
        </Box>
      ) : (
        <Stack
          direction="row"
          spacing={2}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            {/* ✅ Pass setfinished to Steps */}
            <Steps
              resumeData={resumeData}
              setresumeData={setresumeData}
              setfinish={setfinished}
            />
          </Box>

          <Box>
            <Preview
              resumeData={resumeData}
              setresumeData={setresumeData}
            />
          </Box>
        </Stack>
      )}
    </div>
  )
}

export default Form
