import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';

const SpeechToText = () => {
    // Source: https://www.npmjs.com/package/react-speech-recognition
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  

  return (
    <div>
<p><strong>Microphone Status:</strong> {listening ? <MicIcon/> : <MicOffIcon/> }</p>
    <Stack spacing={2} direction="row" style={{justifyContent: 'center', }}>
    <Button variant="outlined" onClick={SpeechRecognition.startListening} startIcon={<MicIcon />}>Start</Button>
      <Button variant="outlined" onClick={SpeechRecognition.stopListening} startIcon={<MicOffIcon />}>Stop</Button>
      <Button variant="outlined" onClick={resetTranscript}>Reset</Button>
    </Stack>
      <p><strong>{transcript}</strong></p>
    </div>
  );
};
export default SpeechToText;