'use client';

import { Suspense, useMemo, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  Stack,
  CircularProgress,
} from '@mui/material';
import ProductCard from '@/components/ProductCard';
import productsData from '@/data/products.json';
import { Product } from '@/types';
import { useSearchParams } from 'next/navigation';

const products = productsData as Product[];
const categories = ['All', ...Array.from(new Set(products.map((p) => p.category)))];

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const [category, setCategory] = useState(initialCategory);

  const filtered = useMemo(() => {
    if (category === 'All') return products;
    return products.filter((p) => p.category === category);
  }, [category]);

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ mb: 5 }}>
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Shop All Products
        </Typography>
        <Typography color="text.secondary">
          Science-backed formulas for cognitive performance, longevity, and cellular health.
        </Typography>
      </Box>

      <Stack direction="row" spacing={1} sx={{ mb: 4, flexWrap: 'wrap', gap: 1 }}>
        <ToggleButtonGroup
          value={category}
          exclusive
          onChange={(_, val) => val && setCategory(val)}
          size="small"
          color="primary"
        >
          {categories.map((cat) => (
            <ToggleButton key={cat} value={cat} sx={{ textTransform: 'none', px: 2 }}>
              {cat}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Stack>

      <Grid container spacing={3}>
        {filtered.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>

      {filtered.length === 0 && (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography color="text.secondary">No products found in this category.</Typography>
        </Box>
      )}
    </Container>
  );
}

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
          <CircularProgress />
        </Box>
      }
    >
      <ShopContent />
    </Suspense>
  );
}
