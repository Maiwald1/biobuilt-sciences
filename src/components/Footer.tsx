'use client';

import { Box, Container, Typography, Stack, Link as MuiLink, Divider } from '@mui/material';
import Link from 'next/link';

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: '#0f2740', color: 'rgba(255,255,255,0.88)', py: 7, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={5} justifyContent="space-between">
          <Box>
            <Box
              component="img"
              src="/BioBuiltLOGO.png"
              alt="Biobuilt Science"
              sx={{ height: 48, width: 'auto', display: 'block', mb: 2 }}
            />
            <Typography variant="body2" sx={{ maxWidth: 320, opacity: 0.75 }}>
              Built on science. Driven by innovation.
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle2" fontWeight={700} gutterBottom>Shop</Typography>
            <Stack spacing={0.6}>
              <MuiLink component={Link} href="/shop" color="inherit" underline="hover" sx={{ opacity: 0.75 }}>All Products</MuiLink>
              <MuiLink component={Link} href="/shop?category=Stacks" color="inherit" underline="hover" sx={{ opacity: 0.75 }}>Research Stacks</MuiLink>
              <MuiLink component={Link} href="/shop?category=Individual" color="inherit" underline="hover" sx={{ opacity: 0.75 }}>Individual Peptides</MuiLink>
            </Stack>
          </Box>
          <Box>
            <Typography variant="subtitle2" fontWeight={700} gutterBottom>Shipping</Typography>
            <Stack spacing={0.6}>
              <Typography variant="body2" sx={{ opacity: 0.75 }}>Free shipping on $299+</Typography>
              <Typography variant="body2" sx={{ opacity: 0.75 }}>Fast shipping</Typography>
            </Stack>
          </Box>
        </Stack>
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.12)', my: 4 }} />
        <Typography variant="caption" sx={{ display: 'block', opacity: 0.55, lineHeight: 1.7, maxWidth: 860, mx: 'auto', textAlign: 'center' }}>
          FOR RESEARCH PURPOSES ONLY — NOT FOR HUMAN OR VETERINARY USE. Products are furnished for in-vitro studies only. They are not medicines or drugs and have not been approved by the FDA to prevent, treat, or cure any condition.
        </Typography>
        <Typography variant="body2" sx={{ textAlign: 'center', opacity: 0.45, mt: 2.5 }}>
          © {new Date().getFullYear()} Biobuilt Science. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
