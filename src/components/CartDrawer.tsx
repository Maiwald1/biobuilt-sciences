'use client';

import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Button,
  Divider,
  Stack,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import Image from 'next/image';

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    totalPrice,
  } = useCart();

  return (
    <Drawer
      anchor="right"
      open={isCartOpen}
      onClose={() => setIsCartOpen(false)}
      PaperProps={{
        sx: { width: { xs: '100%', sm: 420 } },
      }}
    >
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h6" fontWeight={700}>
          Your Cart
        </Typography>
        <IconButton onClick={() => setIsCartOpen(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />

      <Box sx={{ flex: 1, overflow: 'auto', p: 2 }}>
        {items.length === 0 ? (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography color="text.secondary" gutterBottom>
              Your cart is empty
            </Typography>
            <Button
              component={Link}
              href="/shop"
              variant="contained"
              onClick={() => setIsCartOpen(false)}
              sx={{ mt: 2 }}
            >
              Browse Products
            </Button>
          </Box>
        ) : (
          <Stack spacing={2}>
            {items.map((item) => (
              <Box
                key={item.product.id}
                sx={{
                  display: 'flex',
                  gap: 2,
                  p: 1.5,
                  borderRadius: 2,
                  bgcolor: 'background.default',
                }}
              >
                <Box
                  sx={{
                    width: 72,
                    height: 72,
                    borderRadius: 2,
                    overflow: 'hidden',
                    flexShrink: 0,
                    bgcolor: 'grey.100',
                    position: 'relative',
                  }}
                >
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography variant="subtitle2" fontWeight={600} noWrap>
                    {item.product.name}
                  </Typography>
                  <Typography variant="body2" color="primary" fontWeight={600}>
                    ${item.product.price.toFixed(2)}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, gap: 0.5 }}>
                    <IconButton
                      size="small"
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    >
                      <RemoveIcon fontSize="small" />
                    </IconButton>
                    <Typography sx={{ minWidth: 24, textAlign: 'center' }}>
                      {item.quantity}
                    </Typography>
                    <IconButton
                      size="small"
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    >
                      <AddIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      size="small"
                      color="error"
                      onClick={() => removeFromCart(item.product.id)}
                      sx={{ ml: 'auto' }}
                    >
                      <DeleteOutlineIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            ))}
          </Stack>
        )}
      </Box>

      {items.length > 0 && (
        <Box sx={{ p: 2, borderTop: '1px solid', borderColor: 'divider' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Typography fontWeight={600}>Subtotal</Typography>
            <Typography fontWeight={700} color="primary">
              ${totalPrice.toFixed(2)}
            </Typography>
          </Box>
          <Button
            component={Link}
            href="/checkout"
            variant="contained"
            fullWidth
            size="large"
            onClick={() => setIsCartOpen(false)}
          >
            Proceed to Checkout
          </Button>
        </Box>
      )}
    </Drawer>
  );
}
