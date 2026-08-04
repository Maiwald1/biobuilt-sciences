'use client';

import { Suspense } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  CircularProgress,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId') || 'N/A';

  return (
    <Container maxWidth="sm" sx={{ py: 10, textAlign: 'center' }}>
      <Paper sx={{ p: 5 }} elevation={0} variant="outlined">
        <CheckCircleIcon sx={{ fontSize: 72, color: 'primary.main', mb: 2 }} />
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Order Confirmed!
        </Typography>
        <Typography color="text.secondary" paragraph>
          Thank you for your order. We&apos;ve received your request and will begin processing it shortly.
        </Typography>
        <Typography variant="body2" sx={{ mb: 3 }}>
          Order ID: <strong>{orderId}</strong>
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
          A confirmation email will be sent once the order is processed.
          {/* Connection point: Order is stored via Google Sheets API in /api/orders.
              3PL fulfillment is mocked — replace the mock in the API route with real 3PL integration. */}
        </Typography>
        <Button component={Link} href="/shop" variant="contained" size="large">
          Continue Shopping
        </Button>
      </Paper>
    </Container>
  );
}

export default function OrderConfirmationPage() {
  return (
    <Suspense
      fallback={
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
          <CircularProgress />
        </Box>
      }
    >
      <ConfirmationContent />
    </Suspense>
  );
}
