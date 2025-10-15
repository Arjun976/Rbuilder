import React, { useEffect, useState } from 'react';
import { Box, Paper, Typography, Divider, Chip, Stack, Button } from '@mui/material';
import { getHistoryAPI, deleteHistoryAPI } from '../services/allAPI';
import DeleteIcon from '@mui/icons-material/Delete';

function History() {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await getHistoryAPI();
      setHistoryData(response.data || []);
    } catch (error) {
      console.error("Error fetching history:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteHistoryAPI(id);
      setHistoryData(prev => prev.filter(item => item.id !== id));
    } catch (error) {
      console.error("Error deleting history:", error);
    }
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" sx={{ mb: 3, textAlign: 'center' }}>
        Resume History
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
        {historyData.length > 0 ? (
          historyData.map((item, index) => (
            <Paper
              key={index}
              elevation={6}
              sx={{
                width: 300,
                padding: 2,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
              }}
            >
              {/* Delete Button */}
              <Button
                onClick={() => handleDelete(item.id)}
                variant="text"
                color="error"
                size="small"
                sx={{ position: 'absolute', top: 5, right: 5 }}
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>

              {/* Preview Thumbnail */}
              {item.previewImage && (
                <Box
                  component="img"
                  src={item.previewImage}
                  alt="Resume Preview"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 1,
                    boxShadow: 2,
                    mb: 2,
                    cursor: 'pointer',
                    transition: 'transform 0.3s',
                    '&:hover': { transform: 'scale(1.03)' },
                  }}
                />
              )}

              {/* Info Section */}
              {/* <Typography variant="h6" fontWeight="bold" textAlign="center">
                {item.personalDetails?.fullName || "Full Name"}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary" textAlign="center">
                {item.personalDetails?.jobTitle || "Job Title"} | {item.personalDetails?.location || "Location"}
              </Typography>

              <Divider sx={{ my: 1 }} />

              <Typography variant="body2" textAlign="center">
                {item.contactDetails?.email || "Email"} | {item.contactDetails?.phoneNumber || "Phone"}
              </Typography>

              {item.skills?.length > 0 && (
                <Stack direction="row" spacing={0.5} sx={{ flexWrap: 'wrap', justifyContent: 'center', mb: 1 }}>
                  {item.skills.map((skill, i) => (
                    <Chip key={i} label={skill} size="small" variant="outlined" color="primary" />
                  ))}
                </Stack> */}
              {/* )} */}

              <Typography variant="caption" color="text.secondary" textAlign="center">
                Saved on: {item.date} at {item.time}
              </Typography>
            </Paper>
          ))
        ) : (
          <Typography variant="body1" sx={{ mt: 5, textAlign: 'center', width: '100%' }}>
            No history found
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default History;
