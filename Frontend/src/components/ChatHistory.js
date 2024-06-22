import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';

const ChatPage = () => {
    const reninInhibitors = {
        title: "Renin-Inhibitoren (Renin Inhibitors)",
        definition: "Renin-Inhibitoren, auch bekannt als Renin-Hemmer, sind eine Klasse von Medikamenten, die das Enzym Renin hemmen. Renin ist ein Enzym, das von den Nieren produziert wird und eine Schlüsselrolle im Renin-Angiotensin-Aldosteron-System (RAAS) spielt, welches den Blutdruck und den Flüssigkeitshaushalt des Körpers reguliert.",
        mechanism: "Renin-Inhibitoren blockieren die Aktivität von Renin, wodurch die Umwandlung von Angiotensinogen in Angiotensin I verhindert wird. Dies führt zu einer Verringerung der Produktion von Angiotensin II, einem starken Vasokonstriktor, der die Blutgefäße verengt und den Blutdruck erhöht. Durch die Reduktion von Angiotensin II werden die Blutgefäße erweitert und der Blutdruck gesenkt.",
        applications: "Renin-Inhibitoren werden hauptsächlich zur Behandlung von Bluthochdruck (Hypertonie) eingesetzt. Sie können alleine oder in Kombination mit anderen blutdrucksenkenden Medikamenten wie Diuretika, ACE-Hemmern oder Angiotensin-II-Rezeptorblockern (ARBs) verwendet werden.",
        example: "Aliskiren ist ein Beispiel für einen Renin-Inhibitor. Es wird unter Markennamen wie Rasilez® (in den USA als Tekturna® bekannt) verkauft.",
        sideEffects: [
          "Durchfall",
          "Kopfschmerzen",
          "Müdigkeit",
          "Husten (weniger häufig als bei ACE-Hemmern)",
          "Selten: Angioödeme (Schwellung von Gesicht, Lippen und/oder Zunge)"
        ],
        importantNotes: [
          "Renin-Inhibitoren sollten nicht während der Schwangerschaft eingenommen werden, da sie das ungeborene Kind schädigen können.",
          "Patienten mit Nierenproblemen oder Diabetes sollten ihren Arzt konsultieren, bevor sie Renin-Inhibitoren einnehmen, da es zu Wechselwirkungen oder zusätzlichen Risiken kommen kann."
        ]
      };
      const formattedText = `
Title: ${reninInhibitors.title}
Definition: ${reninInhibitors.definition}

Mechanism:
${reninInhibitors.mechanism}

Applications:
${reninInhibitors.applications}

Example:
${reninInhibitors.example}

Side Effects:
${reninInhibitors.sideEffects.join(", ")}

Important Notes:
${reninInhibitors.importantNotes.join("\n")}
`;
      
    const [messages, setMessages] = useState([
        { sender: 'user', text: 'Hallo!' },
        { sender: 'chatbot', text: 'Wie kann ich Ihnen heute helfen' },
        { sender: 'user', text: 'Ich habe eine frage!' },
        { sender: 'user', text: 'Was ist Renin-Inhibitoren' },
        { sender: 'chatbot', text: formattedText}
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
