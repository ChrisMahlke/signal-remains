// src/components/AccessibilityControls.tsx
import {
  Box,
  IconButton,
  Menu,
  Typography,
  Divider,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Switch,
} from '@mui/material';
import {Settings, Type, Palette} from 'lucide-react';
import React, {useState} from 'react';

import {useAppDispatch, useAppSelector} from '../hooks/useRedux';
import {setFontSize, toggleDarkMode} from '../store/navigationSlice';

import type {MouseEvent, ChangeEvent} from 'react';

/**
 * UI controls for accessibility settings like font size, dark mode, and motion preferences.
 */
const AccessibilityControls: React.FC = () => {
  const dispatch = useAppDispatch();
  const {fontSize, darkMode} = useAppSelector((state) => state.navigation);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event: MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (): void => {
    setAnchorEl(null);
  };

  const handleFontSizeChange = (event: ChangeEvent<HTMLInputElement>): void => {
    dispatch(setFontSize(event.target.value as 'small' | 'medium' | 'large'));
  };

  const handleDarkModeToggle = (): void => {
    dispatch(toggleDarkMode());
  };

  return (
    <>
      <IconButton
        aria-controls={menuOpen ? 'accessibility-menu' : undefined}
        aria-expanded={menuOpen}
        aria-haspopup="true"
        aria-label="Accessibility settings"
        size="small"
        sx={{
          color: 'text.secondary',
          '&:hover': {backgroundColor: 'action.hover'},
          '&:focus-visible': {
            outline: '2px solid',
            outlineColor: 'primary.main',
            outlineOffset: '2px',
          },
        }}
        onClick={handleMenuOpen}
      >
        <Settings aria-hidden="true" size={20} />
      </IconButton>

      <Menu
        MenuListProps={{
          'aria-labelledby': 'accessibility-settings',
          role: 'menu',
        }}
        PaperProps={{
          sx: {
            minWidth: {xs: 220, md: 240},
            maxWidth: {xs: 240, md: 260},
            p: {xs: 0.5, md: 1},
          },
        }}
        anchorEl={anchorEl}
        anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
        id="accessibility-menu"
        open={menuOpen}
        transformOrigin={{horizontal: 'right', vertical: 'top'}}
        onClose={handleMenuClose}
      >
        <Box
          role="none"
          sx={{px: {xs: 1, md: 1.5}, py: {xs: 0.5, md: 0.75}}}
        >
          <Typography gutterBottom component="h3" variant="h6">
            Accessibility Settings
          </Typography>

          <Divider sx={{my: 1.5}} />

          {/* Font Size Selection */}
          <FormControl component="fieldset" sx={{mb: 2}}>
            <FormLabel
              component="legend"
              id="font-size-group-label"
              sx={{display: 'flex', alignItems: 'center', gap: 1, mb: 1}}
            >
              <Type aria-hidden="true" size={16} />
              Font Size
            </FormLabel>
            <RadioGroup
              aria-labelledby="font-size-group-label"
              name="font-size-radio-group"
              role="radiogroup"
              value={fontSize}
              onChange={handleFontSizeChange}
            >
              <FormControlLabel
                control={<Radio size="small" />}
                label="Small"
                value="small"
              />
              <FormControlLabel
                control={<Radio size="small" />}
                label="Medium"
                value="medium"
              />
              <FormControlLabel
                control={<Radio size="small" />}
                label="Large"
                value="large"
              />
            </RadioGroup>
          </FormControl>

          <Divider sx={{my: 1.5}} />

          {/* Dark Mode Toggle */}
          <Box
            aria-labelledby="dark-mode-label"
            role="group"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              minHeight: 40,
            }}
          >
            <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
              <Palette aria-hidden="true" size={16} />
              <Typography id="dark-mode-label" variant="body2">
                Dark Mode
              </Typography>
            </Box>
            <Switch
              checked={darkMode}
              inputProps={{
                'aria-label': `Dark mode is currently ${
                  darkMode ? 'enabled' : 'disabled'
                }. Toggle to ${darkMode ? 'disable' : 'enable'} dark mode.`,
                'aria-labelledby': 'dark-mode-label',
              }}
              size="small"
              onChange={handleDarkModeToggle}
            />
          </Box>
        </Box>
      </Menu>
    </>
  );
};

export default AccessibilityControls;
