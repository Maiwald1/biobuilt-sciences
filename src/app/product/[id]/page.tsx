'use client';

import { use } from 'react';
import {
  Box, Container, Typography, Button, Grid, Chip, Divider,
  List, ListItem, ListItemIcon, ListItemText, Alert,
} from '@mui/material';
import ScienceIcon from '@mui/icons-material/Science';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import productsData from '@/data/products.json';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const products = productsData as Product[];

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();

  if (!product) {
    notFound();
  }

  const details = product.compounds?.length ? product.compounds : product.benefits || [];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Button component={Link} href="/shop" startIcon={<ArrowBackIcon />} sx={{ mb: 3 }}>
        Back to Shop
      </Button>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Box sx={{ borderRadius: 3, overflow: 'hidden', bgcolor: 'grey.100', aspectRatio: '1' }}>
            <Box component="img" src={product.image} alt={product.name} sx={{ width: '100%', height: '100%', objectFit: 'contain', bgcolor: '#fff' }} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Chip label={product.category} color="primary" size="small" sx={{ mb: 2 }} />
          <Typography variant="h3" fontWeight={700} gutterBottom>{product.name}</Typography>
          <Typography variant="h4" color="primary" fontWeight={700} sx={{ mb: 2 }}>
            ${product.price.toFixed(2)}
          </Typography>
          <Alert severity="warning" sx={{ mb: 3 }}>
            For Research Purposes Only – Not For Human or Veterinary Use.
          </Alert>
          <Typography color="text.secondary" paragraph sx={{ mb: 3 }}>{product.description}</Typography>
          <Button variant="contained" size="large" startIcon={<AddShoppingCartIcon />} onClick={() => addToCart(product)} disabled={product.stock < 1} sx={{ mb: 4, px: 4 }}>
            {product.stock < 1 ? 'Out of Stock' : 'Add to Cart'}
          </Button>
          {details.length > 0 && (
            <>
              <Typography variant="h6" fontWeight={600} gutterBottom>Research Compounds</Typography>
              <List dense>
                {details.map((c) => (
                  <ListItem key={c} disableGutters>
                    <ListItemIcon sx={{ minWidth: 36 }}><ScienceIcon color="primary" fontSize="small" /></ListItemIcon>
                    <ListItemText primary={c} />
                  </ListItem>
                ))}
              </List>
            </>
          )}
          <Divider sx={{ my: 3 }} />
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', lineHeight: 1.7 }}>
            This product is supplied strictly for laboratory and in-vitro research purposes. Not intended for human or animal consumption. Not approved by the FDA to diagnose, treat, cure, or prevent any disease or condition.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
