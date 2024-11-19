import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface CardProps {
    title: string;
    details: { label: string; value: string | number | JSX.Element }[];
}

const DetailCard: React.FC<CardProps> = ({ title, details }) => (
    <div className='cards'>
        <Box className='detailCard' sx={{ minWidth: 275, maxWidth: "500px" }}>
            <Card sx={{ backgroundColor: "black", border: "solid yellow 2px", borderRadius: "25px" }}>
                <CardContent>
                    <Typography variant="h5" sx={{ color: 'white' }} component="div">
                        {title}
                    </Typography>
                    {details.map((detail, index) => (
                        <Typography key={index} sx={{ color: 'whitesmoke' }} component="div">
                            <strong>{detail.label}:</strong> {detail.value}
                        </Typography>
                    ))}
                </CardContent>
            </Card>
        </Box>
    </div>
);

export default DetailCard;
