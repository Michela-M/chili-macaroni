import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Stack } from '@mui/material';
import { useState } from 'react';

const ProductImages = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <Stack direction="row" spacing={2} sx={{ padding: '20px' }}>
            <ImageList
                sx={{ width: '10%', height: 'auto' }}
                variant="masonry"
                cols={1}
                gap={24}
            >
                {images.map((item) => (
                    <ImageListItem
                        key={item}
                        sx={{
                            cursor: 'pointer',
                        }}
                        onClick={() => setSelectedImage(item)}
                    >
                        <img src={`${item}`} loading="lazy" />
                    </ImageListItem>
                ))}
            </ImageList>
            <img
                src={selectedImage}
                alt="Product"
                style={{
                    width: '40%',
                    height: 'auto',
                    objectFit: 'cover',
                }}
            />
        </Stack>
    );
};

export default ProductImages;
