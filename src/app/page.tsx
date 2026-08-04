'use client';

import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Stack,
} from '@mui/material';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import productsData from '@/data/products.json';
import { Product } from '@/types';

const products = productsData as Product[];
const featured = products.filter((p) => p.featured);

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0a2e2c 0%, #0d7377 50%, #2e8b57 100%)',
          color: 'white',
          py: { xs: 10, md: 14 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography
                variant="overline"
                sx={{ opacity: 0.8, letterSpacing: 2, mb: 1, display: 'block' }}
              >
                SCIENCE-BACKED FORMULATIONS
              </Typography>
              <Typography
                variant="h2"
                component="h1"
                fontWeight={800}
                sx={{
                  mb: 2,
                  fontSize: { xs: '2.2rem', md: '3.2rem' },
                  lineHeight: 1.15,
                }}
              >
                Build Better Biology
              </Typography>
              <Typography
                variant="h6"
                sx={{ mb: 4, opacity: 0.85, maxWidth: 520, fontWeight: 400 }}
              >
                Premium, research-driven supplements designed to support cognitive performance,
                cellular energy, and healthy longevity.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  component={Link}
                  href="/shop"
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: 'white',
                    color: 'primary.dark',
                    '&:hover': { bgcolor: 'grey.100' },
                    px: 4,
                  }}
                >
                  Shop All Products
                </Button>
                <Button
                  component={Link}
                  href="/shop?category=Cognitive"
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: 'rgba(255,255,255,0.5)',
                    color: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      bgcolor: 'rgba(255,255,255,0.08)',
                    },
                  }}
                >
                  Explore Cognitive
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Featured Products */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" fontWeight={700} gutterBottom>
            Featured Formulas
          </Typography>
          <Typography color="text.secondary" maxWidth={500} mx="auto">
            Our most advanced, clinically inspired products for peak performance and longevity.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {featured.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button component={Link} href="/shop" variant="outlined" size="large">
            View All Products
          </Button>
        </Box>
      </Container>

      {/* Value props */}
      <Box sx={{ bgcolor: 'background.default', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {[
              {
                title: 'Research-Backed',
                desc: 'Formulas informed by peer-reviewed science and clinical research.',
              },
              {
                title: 'Third-Party Tested',
                desc: 'Every batch is independently tested for purity and potency.',
              },
              {
                title: 'Transparent Ingredients',
                desc: 'No proprietary blends. Full label transparency on every product.',
              },
            ].map((item) => (
              <Grid item xs={12} md={4} key={item.title}>
                <Box sx={{ textAlign: 'center', px: 2 }}>
                  <Typography variant="h6" fontWeight={700} color="primary" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">{item.desc}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
