'use client';

import { Box, Container, Typography, Button, Grid, Stack } from '@mui/material';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import productsData from '@/data/products.json';
import { Product } from '@/types';

const products = productsData as Product[];
const featured = products.filter((p) => p.featured);

export default function HomePage() {
  return (
    <>
      <Box sx={{ background: 'linear-gradient(180deg, #ffffff 0%, #f3f6f4 100%)', py: { xs: 8, md: 12 }, borderBottom: '1px solid #e6ebe8' }}>
        <Container maxWidth="lg">
          <Stack spacing={2.5} alignItems="flex-start" maxWidth={640}>
            <Typography variant="overline" sx={{ letterSpacing: 2.4, color: 'secondary.main', fontWeight: 700 }}>
              RESEARCH PEPTIDES
            </Typography>
            <Typography variant="h2" component="h1" sx={{ fontSize: { xs: '2.15rem', md: '3.25rem' }, lineHeight: 1.12, color: 'primary.main' }}>
              Built on science.<br />Driven by innovation.
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400, maxWidth: 520 }}>
              Research-grade peptides and stacks for laboratory investigation of cellular repair, metabolic regulation, and recovery pathways.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ pt: 1 }}>
              <Button component={Link} href="/shop" variant="contained" size="large">Shop All Peptides</Button>
              <Button component={Link} href="/shop?category=Stacks" variant="outlined" size="large">View Stacks</Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ mb: 5 }}>
          <Typography variant="h4" fontWeight={700} color="primary.main" gutterBottom>Featured products</Typography>
          <Typography color="text.secondary">Popular research stacks and compounds from the Biobuilt catalog.</Typography>
        </Box>
        <Grid container spacing={3}>
          {featured.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button component={Link} href="/shop" variant="outlined" size="large">Shop the full catalog</Button>
        </Box>
      </Container>
    </>
  );
}
