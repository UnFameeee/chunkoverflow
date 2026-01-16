/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border-default))",
        input: "hsl(var(--input-border))",
        ring: "hsl(var(--ring))",

        // Background colors
        background: "hsl(var(--bg-primary))",
        "bg-primary": "hsl(var(--bg-primary))",
        "bg-secondary": "hsl(var(--bg-secondary))",
        "bg-tertiary": "hsl(var(--bg-tertiary))",
        "bg-muted": "hsl(var(--bg-muted))",
        "bg-card": "hsl(var(--bg-card))",
        "bg-popover": "hsl(var(--bg-popover))",

        // Foreground/text colors
        foreground: "hsl(var(--fg-primary))",
        "fg-primary": "hsl(var(--fg-primary))",
        "fg-secondary": "hsl(var(--fg-secondary))",
        "fg-muted": "hsl(var(--fg-muted))",
        "fg-disabled": "hsl(var(--fg-disabled))",
        "fg-card": "hsl(var(--fg-card))",
        "fg-popover": "hsl(var(--fg-popover))",

        // Primary colors
        primary: {
          DEFAULT: "hsl(var(--primary))",
          fg: "hsl(var(--primary-fg))",
          hover: "hsl(var(--primary-hover))",
          active: "hsl(var(--primary-active))",
          50: "hsl(var(--primary-50))",
          100: "hsl(var(--primary-100))",
          200: "hsl(var(--primary-200))",
          300: "hsl(var(--primary-300))",
          400: "hsl(var(--primary-400))",
          500: "hsl(var(--primary-500))",
          600: "hsl(var(--primary-600))",
          700: "hsl(var(--primary-700))",
          800: "hsl(var(--primary-800))",
          900: "hsl(var(--primary-900))",
          950: "hsl(var(--primary-950))",
        },

        // Semantic colors
        success: {
          DEFAULT: "hsl(var(--success))",
          bg: "hsl(var(--success-bg))",
          border: "hsl(var(--success-border))",
          fg: "hsl(var(--success-fg))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          bg: "hsl(var(--warning-bg))",
          border: "hsl(var(--warning-border))",
          fg: "hsl(var(--warning-fg))",
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          bg: "hsl(var(--info-bg))",
          border: "hsl(var(--info-border))",
          fg: "hsl(var(--info-fg))",
        },
        error: {
          DEFAULT: "hsl(var(--error))",
          bg: "hsl(var(--error-bg))",
          border: "hsl(var(--error-border))",
          fg: "hsl(var(--error-fg))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          fg: "hsl(var(--destructive-fg))",
        },

        // Component colors
        secondary: {
          DEFAULT: "hsl(var(--bg-secondary))",
          fg: "hsl(var(--fg-secondary))",
        },
        muted: {
          DEFAULT: "hsl(var(--bg-muted))",
          fg: "hsl(var(--fg-muted))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          fg: "hsl(var(--accent-fg))",
        },
        popover: {
          DEFAULT: "hsl(var(--bg-popover))",
          fg: "hsl(var(--fg-popover))",
        },
        card: {
          DEFAULT: "hsl(var(--bg-card))",
          fg: "hsl(var(--fg-card))",
        },

        // Additional accent colors
        "accent-mint": "hsl(var(--accent-mint))",
        "accent-teal": "hsl(var(--accent-teal))",
        "accent-cyan": "hsl(var(--accent-cyan))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
}
