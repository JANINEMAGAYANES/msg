import React from 'react';
import { Snackbar, Card, CardContent, Typography, Avatar, IconButton, Backdrop } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const IphoneNotification = ({ open, onClose, title, message, avatarSrc }) => {
  return (
    <Backdrop open={open} onClick={onClose} sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Snackbar
        anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
        open={open}
        onClose={onClose}
        autoHideDuration={6000}
        sx={{ top: '50%', transform: 'translateY(-50%)', width: '100%' }}
      >
        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#fff',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            borderRadius: '10px',

            width: '500px',
            maxWidth: '90%', // to make sure it doesn't overflow on small screens
          }}
        >
          <Avatar src={avatarSrc} alt={title} sx={{ marginLeft: '10px' }} />
          <CardContent sx={{ flex: '1 0 auto', padding: 1 }}>
            <Typography variant="h6" component="div" sx={{ marginBottom: '5px' }}>
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ whiteSpace: 'pre-wrap' }}>
              {message}
            </Typography>
          </CardContent>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Card>
      </Snackbar>
    </Backdrop>
  );
};

export default IphoneNotification;
