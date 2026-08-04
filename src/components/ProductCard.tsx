'use client';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Chip,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 12px 32px rgba(13, 115, 119, 0.15)',
        },
      }}
    >
      <Box
        component={Link}
        href={`/product/${product.id}`}
        sx={{ textDecoration: 'none', color: 'inherit' }}
      >
        <CardMedia
          component="img"
          height="220"
          image={product.image}
          alt={product.name}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent sx={{ flexGrow: 1, pb: 1 }}>
          <Chip
            label={product.category}
            size="small"
            sx={{
              mb: 1,
              bgcolor: 'primary.main',
              color: 'white',
              fontWeight: 500,
              fontSize: '0.7rem',
            }}
          />
          <Typography
            variant="h6"
            component="h3"
            fontWeight={600}
            sx={{
              mb: 0.5,
              lineHeight: 1.3,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {product.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mb: 1.5,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {product.description}
          </Typography>
          <Typography variant="h6" color="primary" fontWeight={700}>
            ${product.price.toFixed(2)}
          </Typography>
        </CardContent>
      </Box>
      <Box sx={{ p: 2, pt: 0 }}>
        <Button
          variant="contained"
          fullWidth
          startIcon={<AddShoppingCartIcon />}
          onClick={() => addToCart(product)}
          disabled={product.stock < 1}
        >
          {product.stock < 1 ? 'Out of Stock' : 'Add to Cart'}
        </Button>
      </Box>
    </Card>
  );
}
