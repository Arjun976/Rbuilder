import React, { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import { MdEditDocument } from "react-icons/md";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Stack, Chip, Divider } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight: '85vh',
  overflowY: 'auto',
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

function Edit({ resumeData, setresumeData }) {
  const [open, setOpen] = useState(false);
  const [newSkill, setNewSkill] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (section, field, value) => {
    setresumeData({
      ...resumeData,
      [section]: {
        ...resumeData[section],
        [field]: value,
      },
    });
  };

  // add a new skill manually
  const handleAddSkill = () => {
    if (newSkill.trim() === '') return;
    setresumeData({
      ...resumeData,
      skills: [...resumeData.skills, newSkill.trim()],
    });
    setNewSkill('');
  };

  // remove a skill
  const handleDeleteSkill = (index) => {
    const updatedSkills = resumeData.skills.filter((_, i) => i !== index);
    setresumeData({
      ...resumeData,
      skills: updatedSkills,
    });
  };

  // Suggested skills
  const suggestedSkills = [
    "React", "Node.js", "JavaScript", "Python", "HTML", 
    "CSS", "Flutter", "Firebase", "SQL", "UI/UX"
  ];

  // add a suggested skill
  const handleAddSuggestedSkill = (skill) => {
    if (!resumeData.skills.includes(skill)) {
      setresumeData({
        ...resumeData,
        skills: [...resumeData.skills, skill],
      });
    }
  };

  return (
    <div>
      <Tooltip title="Edit">
        <Button onClick={handleOpen}>
          <MdEditDocument className='fs-2' />
        </Button>
      </Tooltip>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" component="h2" textAlign="center" gutterBottom>
            Edit Your Details
          </Typography>

          {/* PERSONAL DETAILS */}
          <h3 className="text-center mt-3">Personal Details</h3>
          <Box display="flex" flexDirection="column" alignItems="center">
            <TextField
              label="Full Name"
              value={resumeData.personalDetails.fullName}
              onChange={(e) => handleChange("personalDetails", "fullName", e.target.value)}
              sx={{ m: 1, width: '55ch' }}
            />
            <TextField
              label="Job Title"
              value={resumeData.personalDetails.jobTitle}
              onChange={(e) => handleChange("personalDetails", "jobTitle", e.target.value)}
              sx={{ m: 1, width: '55ch' }}
            />
            <TextField
              label="Location"
              value={resumeData.personalDetails.location}
              onChange={(e) => handleChange("personalDetails", "location", e.target.value)}
              sx={{ m: 1, width: '55ch' }}
            />
          </Box>

          {/* CONTACT DETAILS */}
          <h3 className="text-center mt-3">Contact Details</h3>
          <Box display="flex" flexDirection="column" alignItems="center">
            <TextField
              label="Email"
              value={resumeData.contactDetails.email}
              onChange={(e) => handleChange("contactDetails", "email", e.target.value)}
              sx={{ m: 1, width: '55ch' }}
            />
            <TextField
              label="Phone Number"
              value={resumeData.contactDetails.phoneNumber}
              onChange={(e) => handleChange("contactDetails", "phoneNumber", e.target.value)}
              sx={{ m: 1, width: '55ch' }}
            />
            <TextField
              label="GitHub"
              value={resumeData.contactDetails.github}
              onChange={(e) => handleChange("contactDetails", "github", e.target.value)}
              sx={{ m: 1, width: '55ch' }}
            />
            <TextField
              label="LinkedIn"
              value={resumeData.contactDetails.linkedIn}
              onChange={(e) => handleChange("contactDetails", "linkedIn", e.target.value)}
              sx={{ m: 1, width: '55ch' }}
            />
            <TextField
              label="Portfolio"
              value={resumeData.contactDetails.portfolio}
              onChange={(e) => handleChange("contactDetails", "portfolio", e.target.value)}
              sx={{ m: 1, width: '55ch' }}
            />
          </Box>

          {/* EDUCATION */}
          <h3 className="text-center mt-3">Education Details</h3>
          <Box display="flex" flexDirection="column" alignItems="center">
            <TextField
              label="Course"
              value={resumeData.educationDetails.course}
              onChange={(e) => handleChange("educationDetails", "course", e.target.value)}
              sx={{ m: 1, width: '55ch' }}
            />
            <TextField
              label="College"
              value={resumeData.educationDetails.college}
              onChange={(e) => handleChange("educationDetails", "college", e.target.value)}
              sx={{ m: 1, width: '55ch' }}
            />
            <TextField
              label="University"
              value={resumeData.educationDetails.university}
              onChange={(e) => handleChange("educationDetails", "university", e.target.value)}
              sx={{ m: 1, width: '55ch' }}
            />
            <TextField
              label="Passout Year"
              value={resumeData.educationDetails.passout}
              onChange={(e) => handleChange("educationDetails", "passout", e.target.value)}
              sx={{ m: 1, width: '55ch' }}
            />
          </Box>

          {/* WORK EXPERIENCE */}
          <h3 className="text-center mt-3">Work Experience</h3>
          <Box display="flex" flexDirection="column" alignItems="center">
            <TextField
              label="Job Title"
              value={resumeData.workExperience.jobTitle}
              onChange={(e) => handleChange("workExperience", "jobTitle", e.target.value)}
              sx={{ m: 1, width: '55ch' }}
            />
            <TextField
              label="Company"
              value={resumeData.workExperience.company}
              onChange={(e) => handleChange("workExperience", "company", e.target.value)}
              sx={{ m: 1, width: '55ch' }}
            />
            <TextField
              label="Location"
              value={resumeData.workExperience.location}
              onChange={(e) => handleChange("workExperience", "location", e.target.value)}
              sx={{ m: 1, width: '55ch' }}
            />
            <TextField
              label="Duration"
              value={resumeData.workExperience.duration}
              onChange={(e) => handleChange("workExperience", "duration", e.target.value)}
              sx={{ m: 1, width: '55ch' }}
            />
          </Box>

          {/* SKILLS */}
<h3 className="text-center mt-3">Skills</h3>
<Box display="flex" flexDirection="column" alignItems="center">

  {/* Manual Skill Input */}
  <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
    <TextField
      label="Add Skill"
      value={newSkill}
      onChange={(e) => setNewSkill(e.target.value)}
      size="small"
    />
    <Button variant="contained" onClick={handleAddSkill}>Add</Button>
  </Stack>

  {/* Suggested Skills */}
  <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1 }}>
    {suggestedSkills.map((skill, i) => (
      <Chip
        key={i}
        label={skill}
        color={resumeData.skills.includes(skill) ? "primary" : "default"}
        variant={resumeData.skills.includes(skill) ? "filled" : "outlined"}
        onClick={() => handleAddSuggestedSkill(skill)}
        clickable
        sx={{ margin: 0.5 }}
      />
    ))}
  </Box>

  {/* Display Added Skills */}
  <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center">
    {resumeData.skills.length > 0 ? (
      resumeData.skills.map((skill, index) => (
        <Chip
          key={index}
          label={skill}
          color="primary"
          onDelete={() => handleDeleteSkill(index)}
          sx={{ margin: 0.5 }}
        />
      ))
    ) : (
      <Typography variant="body2" color="text.secondary">
        No skills added yet
      </Typography>
    )}
  </Stack>
</Box>


          {/* SUMMARY */}
          <h3 className="text-center mt-3">Professional Summary</h3>
          <TextField
            multiline
            rows={5}
            label="Professional Summary"
            value={resumeData.summary}
            onChange={(e) => setresumeData({ ...resumeData, summary: e.target.value })}
            sx={{ m: 2, ml: 5, width: '50ch' }}
          />

          <Box display="flex" justifyContent="center" mt={2}>
            <Button variant="contained" onClick={handleClose}>Update</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default Edit;
