# HubSpot FAQ Module (B2B SaaS Style)

A super clean, minimalist, and highly configurable HubSpot FAQ module. Designed with best practices used by leading B2B SaaS companies (like Wiz, Snyk, CrowdStrike, and GitLab).

## Features
- **Configurable Spacing**: Compact, Normal, or Relaxed.
- **Configurable Borders**: No Lines (Minimal), Bottom Lines (Classic), or Full Boxed (Card Style).
- **Customizable Colors**: Set colors for Questions, Answers, Borders, and Icons straight from the HubSpot editor.
- **Best Practices**:
  - Full ARIA accessibility (keyboard navigable, screen reader friendly).
  - SEO JSON-LD Schema integration for rich snippets.
  - Smooth native Javascript accordion sizing via ResizeObserver (no jQuery required).

## Installation

You can deploy this module to your HubSpot account using the HubSpot CLI:

```bash
# Authenticate with your HubSpot portal
hs auth

# Upload the module to your portal
hs upload faq.module /faq.module
```

Alternatively, you can create a new Custom Module in the HubSpot Design Tools, and copy/paste the `html`, `css`, `js`, and `fields.json` content manually.

## Configuration Options

When added to a page, editors can customize:
1. **FAQs**: Add questions and rich-text answers.
2. **Design Settings**:
   - Spacing & Borders
   - Colors (Background, Text, Icons, Borders)
3. **SEO**:
   - Toggle FAQPage schema markup on or off.
