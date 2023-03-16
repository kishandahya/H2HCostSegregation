import React from 'react';
import { Button } from '@mui/material';

const CTAButton = ({ onClick,
text }) => {
return (
<Button variant="contained" color="secondary" onClick={onClick}>
{text}
</Button>
);
};

export default CTAButton;