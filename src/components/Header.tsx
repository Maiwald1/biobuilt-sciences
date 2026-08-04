'use client';

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
  Box,
  Container,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import CartDrawer from './CartDrawer';

export default function Header() {
  const { totalItems, setIsCartOpen } = useCart();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
  ];

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid',
          borderColor: 'divider',
          color: 'text.primary',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ py: 1 }}>
            {isMobile && (
              <IconButton
                edge="start"
                onClick={() => setMobileOpen(true)}
                sx={{ mr: 1 }}
              >
                <MenuIcon />
              </IconButton>
            )}

            <Box
              component={Link}
              href="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                color: 'inherit',
                flexGrow: isMobile ? 1 : 0,
                mr: 4,
              }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #0d7377 0%, #2e8b57 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 1.5,
                  color: 'white',
                  fontWeight: 800,
                  fontSize: '1.1rem',
                }}
              >
                B
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #0d7377 0%, #2e8b57 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '-0.02em',
                }}
              >
                Biobuilt Sciences
              </Typography>
            </Box>

            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 1, flexGrow: 1 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.href}
                    component={Link}
                    href={item.href}
                    color="inherit"
                    sx={{ fontWeight: 500 }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}

            <IconButton
              color="inherit"
              onClick={() => setIsCartOpen(true)}
              aria-label="cart"
            >
              <Badge badgeContent={totalItems} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      >
        <Box sx={{ width: 260, pt: 2 }}>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.href} disablePadding>
                <ListItemButton
                  component={Link}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <CartDrawer />
    </>
  );
}
