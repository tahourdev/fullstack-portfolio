'use client'; // This directive makes the component client-side only

import React, { useState } from 'react';

interface VoiceGeneratorProps {
    text: string;
}

const VoiceGenerator: React.FC<VoiceGeneratorProps> = ({ text }) => {
    const [audioUrl, setAudioUrl] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const generateVoiceover = async () => {
        setError(null);
        try {
            const response = await fetch('/api/voiceover', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text }),
            });

            if (response.ok) {
                const blob = await response.blob();
                const url = URL.createObjectURL(blob);
                setAudioUrl(url);
            } else {
                const errorData = await response.json();
                setError(errorData.error.message);
                console.error('Failed to generate voiceover:', errorData);
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An unexpected error occurred. Please try again later.');
        }
    };

    return (
        <div>
            <button onClick={generateVoiceover}>Play Voiceover</button>
            {audioUrl && <audio controls src={audioUrl} />}
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
    );
};

export default VoiceGenerator;
