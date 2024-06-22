import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';

const ChatPage = () => {
    const [messages, setMessages] = useState([
        { sender: 'user', text: 'Hallo, ich brauche ein neues Rezept für Ibuprofen' },
        { sender: 'chatbot', text: 'Haben Sie das Medikament beim letzten Mal gut vertragen? Wie stark sind Ihre Schmerzen?' },
        { sender: 'user', text: 'Ja, ich hatte keine Nebenwirkungen. In den letzten Tagen hatte ich nur wenig Schmerzen.' },
        { sender: 'chatbot', text: 'Ich habe Ihnen gerade ein neues Rezept ausgestellt, aber die Dosis verringert. Bei Fragen melden Sie sich gerne jederzeit!' },
    ]);
    const [input, setInput] = useState('');

    const handleSendMessage = () => {
        if (input.trim() !== '') {
            setMessages([...messages, { sender: 'user', text: input }]);
            setInput('');
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100vh',
                p: 2
            }}
        >
            <Box sx={{ flexGrow: 1, overflowY: 'auto', mb: 2 }}>
                {messages.map((message, index) => (
                    <Paper
                        key={index}
                        sx={{
                            p: 2,
                            mb: 2,
                            alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
                            backgroundColor: message.sender === 'user' ? '#e0f7fa' : '#f1f8e9',
                            maxWidth: '60%',
                            ...(message.sender === 'user' && { marginLeft: 'auto' }),
                        }}
                    >
                        <Typography variant="body1">{message.text}</Typography>
                    </Paper>
                ))}
            </Box>
            <Box
                component="form"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                }}
                sx={{ display: 'flex', alignItems: 'center' }}
            >
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    sx={{ mr: 1 }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Send
                </Button>
            </Box>
        </Box>
    );
};

export default ChatPage;
