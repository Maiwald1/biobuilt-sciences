'use client';

import { use } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Chip,
  Stack,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import productsData from '@/data/products.json';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const products = productsData as Product[];

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();

  if (!product) {
    notFound();
  }

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Button
        component={Link}
        href="/shop"
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 3 }}
      >
        Back to Shop
      </Button>

      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              borderRadius: 3,
              overflow: 'hidden',
              bgcolor: 'grey.100',
              aspectRatio: '1',
              position: 'relative',
            }}
          >
            <Box
              component="img"
              src={product.image}
              alt={product.name}
              sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Chip
            label={product.category}
            color="primary"
            size="small"
            sx={{ mb: 2 }}
          />
          <Typography variant="h3" fontWeight={700} gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h4" color="primary" fontWeight={700} sx={{ mb: 2 }}>
            ${product.price.toFixed(2)}
          </Typography>
          <Typography color="text.secondary" paragraph sx={{ mb: 3 }}>
            {product.description}
          </Typography>

          <Button
            variant="contained"
            size="large"
            startIcon={<AddShoppingCartIcon />}
            onClick={() => addToCart(product)}
            disabled={product.stock < 1}
            sx={{ mb: 4, px: 4 }}
          >
            {product.stock < 1 ? 'Out of Stock' : 'Add to Cart'}
          </Button>

          {product.benefits && product.benefits.length > 0 && (
            <>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Key Benefits
              </Typography>
              <List dense>
                {product.benefits.map((b) => (
                  <ListItem key={b} disableGutters>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <CheckCircleOutlineIcon color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={b} />
                  </ListItem>
                ))}
              </List>
            </>
          )}

          {product.ingredients && product.ingredients.length > 0 && (
            <>
              <Divider sx={{ my: 3 }} />
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Key Ingredients
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={1}>
                {product.ingredients.map((ing) => (
                  <Chip key={ing} label={ing} variant="outlined" size="small" />
                ))}
              </Stack>
            </>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
