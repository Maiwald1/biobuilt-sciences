'use client';

import { Box, Container, Typography, Stack, Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#0a2e2c',
        color: 'rgba(255,255,255,0.85)',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          justifyContent="space-between"
        >
          <Box>
            <Box
              sx={{
                position: 'relative',
                height: 56,
                width: 200,
                mb: 1.5,
              }}
            >
              <Image
                src="/logo.png"
                alt="Biobuilt Sciences"
                fill
                style={{ objectFit: 'contain', objectPosition: 'left' }}
              />
            </Box>
            <Typography variant="body2" sx={{ maxWidth: 280, opacity: 0.7 }}>
              Science-backed formulations for cognitive performance, longevity, and cellular health.
            </Typography>
          </Box>

          <Box>
            <Typography variant="subtitle2" fontWeight={600} gutterBottom>
              Shop
            </Typography>
            <Stack spacing={0.5}>
              <MuiLink component={Link} href="/shop" color="inherit" underline="hover" sx={{ opacity: 0.7 }}>
                All Products
              </MuiLink>
              <MuiLink component={Link} href="/shop?category=Cognitive" color="inherit" underline="hover" sx={{ opacity: 0.7 }}>
                Cognitive
              </MuiLink>
              <MuiLink component={Link} href="/shop?category=Longevity" color="inherit" underline="hover" sx={{ opacity: 0.7 }}>
                Longevity
              </MuiLink>
            </Stack>
          </Box>

          <Box>
            <Typography variant="subtitle2" fontWeight={600} gutterBottom>
              Company
            </Typography>
            <Stack spacing={0.5}>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                Research-backed formulas
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                Third-party tested
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                Made in the USA
              </Typography>
            </Stack>
          </Box>
        </Stack>

        <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', mt: 4, pt: 3, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ opacity: 0.5 }}>
            © {new Date().getFullYear()} Biobuilt Sciences. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
