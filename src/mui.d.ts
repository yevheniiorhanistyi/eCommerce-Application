import '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    accent: Palette['primary'];
  }
  interface PaletteOptions {
    accent?: PaletteOptions['primary'];
  }
  interface PaletteColor {
    lighter?: string;
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    lighter?: string;
    darker?: string;
  }
}
