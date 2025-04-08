import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Button,
    Stack,
    Chip,
} from '@mui/material';
import { formatPrice, getDiscountPercent } from '../utils/PriceUtils';

const ProductCard = ({ name, image, oldPrice, newPrice }) => {
    const discount = getDiscountPercent(oldPrice, newPrice);

    return (
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
                component="img"
                title={name}
                src={image}
                sx={{ aspectRatio: '1 / 1', objectFit: 'contain' }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Stack direction="row" spacing={2} alignItems="center">
                    <Typography variant="h6">{name}</Typography>
                    {discount && (
                        <Chip label={`-${discount}%`} color="primary" />
                    )}
                </Stack>
                <Stack direction="row" spacing={2}>
                    {oldPrice && (
                        <Typography
                            variant="body2"
                            sx={{
                                textDecoration: 'line-through',
                                color: 'text.secondary',
                            }}
                        >
                            {formatPrice(oldPrice)}
                        </Typography>
                    )}
                    <Typography variant="body2">
                        {formatPrice(newPrice)}
                    </Typography>
                </Stack>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
                <Button variant="contained">Buy now</Button>
            </CardActions>
        </Card>
    );
};

export default ProductCard;
