'use client';

import {
  AppBar, Toolbar, Button, IconButton, Badge, Box, Container,
  useMediaQuery, useTheme, Drawer, List, ListItem, ListItemButton, ListItemText,
} from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
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
    { label: 'Stacks', href: '/shop?category=Stacks' },
  ];
  return (
    <>
      <Box sx={{ bgcolor: '#1a3d63', color: 'white', py: 0.75, fontSize: 13, textAlign: 'center' }}>
        Free shipping on orders $299+  ·  Fast shipping
      </Box>
      <AppBar position="sticky" elevation={0} sx={{ backgroundColor: '#ffffff', color: '#1a3d63', borderBottom: '1px solid #e6ebe8' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ py: 1.25, minHeight: 76 }}>
            {isMobile && (
              <IconButton edge="start" onClick={() => setMobileOpen(true)} sx={{ mr: 1, color: '#1a3d63' }}>
                <MenuIcon />
              </IconButton>
            )}
            <Box component={Link} href="/" sx={{ display: 'flex', alignItems: 'center', mr: 4, flexGrow: isMobile ? 1 : 0 }}>
              <Box component="img" src="/logo.png" alt="Biobuilt Science" sx={{ height: { xs: 42, md: 52 }, width: 'auto', display: 'block' }} />
            </Box>
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 0.5, flexGrow: 1 }}>
                {navItems.map((item) => (
                  <Button key={item.href} component={Link} href={item.href} sx={{ color: '#1a3d63', fontWeight: 600, px: 1.5 }}>
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}
            <IconButton onClick={() => setIsCartOpen(true)} aria-label="cart" sx={{ color: '#1a3d63' }}>
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer anchor="left" open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <Box sx={{ width: 260, pt: 2 }}>
          <Box sx={{ px: 2, pb: 2 }}>
            <Box component="img" src="/logo.png" alt="Biobuilt Science" sx={{ height: 36, width: 'auto' }} />
          </Box>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.href} disablePadding>
                <ListItemButton component={Link} href={item.href} onClick={() => setMobileOpen(false)}>
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
