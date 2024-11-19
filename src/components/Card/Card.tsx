import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface CardItemProps {
    title: string;
    subtitle: string;
    description: string;
    linkTo: string;
    label: string;
}

const CardItem: React.FC<CardItemProps> = ({ title, subtitle, description, linkTo, label }) => (
    <Box sx={{ minWidth: 275, marginBlock: "20px" }}>
        <Link to={linkTo}>
            <Card sx={{ backgroundColor: 'black', border: 'solid yellow 2px', borderRadius: '25px' }}>
                <CardContent>
                    <Typography gutterBottom sx={{ color: 'white', fontSize: 14 }}>
                        {label}
                    </Typography>
                    <Typography variant="h5" sx={{ color: 'white' }} component="div">
                        {title || 'Unknown'}
                    </Typography>
                    <Typography sx={{ color: 'whitesmoke', mb: 1.5 }}>
                        {subtitle || 'Unknown'}
                    </Typography>
                    <Typography sx={{ color: 'whitesmoke' }} variant="body2">
                        {description || 'No description available'}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    </Box>
);

export default CardItem;