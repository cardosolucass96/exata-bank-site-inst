# Exata Bank - Crédito Consignado Platform

Modern financial services platform for Exata Bank, providing loan simulation and partner access for INSS, public servants, CLT employees, and benefit recipients.

**Experience Qualities**:
1. **Professional** - Inspires trust and credibility through polished design and clear financial information
2. **Accessible** - Simple loan simulation process that guides users effortlessly through options
3. **Sophisticated** - Premium feel that reflects the Exata Grupo brand heritage and financial expertise

**Complexity Level**: Light Application (multiple features with basic state)
- This is a marketing and simulation platform with interactive loan calculators, product comparison, and partner login functionality. It requires state management for simulation inputs and user authentication but doesn't need complex routing or data structures.

## Essential Features

### Loan Simulator
- **Functionality**: Interactive calculator allowing users to adjust loan amount and term with real-time monthly payment calculation
- **Purpose**: Core conversion tool that demonstrates value proposition and encourages loan applications
- **Trigger**: User selects product type and adjusts sliders for amount/term
- **Progression**: Select product → Adjust amount slider → Adjust term slider → View calculated monthly payment and total cost → Click "Solicitar Agora"
- **Success criteria**: Accurate Price formula calculations, smooth slider interactions, responsive updates under 100ms

### Product Comparison
- **Functionality**: Five distinct loan products (INSS, Public Servants, Credit Card, CLT, Auxílio Brasil) with unique rates and terms
- **Purpose**: Educates users on available options and guides them to appropriate product
- **Trigger**: User clicks product card in grid
- **Progression**: View product grid → Click product card → See product details and rates → Use simulator → Return to compare other products
- **Success criteria**: Clear visual indication of selected product, accurate rate/term display per product

### Partner Login Modal
- **Functionality**: Authentication interface for bank partners to access management system
- **Purpose**: Separates partner access from consumer experience while maintaining brand consistency
- **Trigger**: User clicks "Área do Parceiro" button in navbar or footer
- **Progression**: Click login button → Modal opens → Enter credentials → Submit (simulated) → Close modal
- **Success criteria**: Smooth modal animation, form validation, escape key and backdrop click to close

### Market Comparison Visualization
- **Functionality**: Bar chart showing Exata's competitive advantage in interest rates
- **Purpose**: Builds trust by transparently demonstrating value versus competitors
- **Trigger**: Hero section loads on page view
- **Progression**: Page loads → Bar chart animates in → User hovers bars to see exact rates
- **Success criteria**: Smooth animation on load, clear visual hierarchy emphasizing Exata advantage

### Donut Chart Breakdown
- **Functionality**: SVG visualization showing principal vs interest ratio
- **Purpose**: Helps users understand total cost composition visually
- **Trigger**: User adjusts loan parameters
- **Progression**: Simulation updates → Donut chart animates to new ratio → User views breakdown
- **Success criteria**: Smooth transitions between ratios, readable legend, accurate proportions

## Edge Case Handling

- **Invalid Slider Values** - Sliders automatically constrain to min/max per product; reset to valid range on product switch
- **Mobile Menu State** - Menu closes on route navigation or resize to desktop breakpoint
- **Modal Escape Handling** - Login modal closes on Escape key, backdrop click, or explicit close button
- **Zero/Extreme Calculations** - Calculator handles edge amounts gracefully without NaN or Infinity errors
- **Rapid Product Switching** - Debounced calculations prevent performance issues from rapid slider adjustments

## Design Direction

The design should evoke trust, modernity, and financial expertise. Professional yet approachable - corporate banking sophistication balanced with consumer-friendly warmth. Visual language inspired by contemporary fintech (Nubank, C6 Bank) but with distinctive red brand identity and elevated presentation matching the reference site (meutudo.com.br).

## Color Selection

Bold red brand identity with sophisticated neutral foundation for professional financial context.

- **Primary Color**: Deep Red `oklch(0.55 0.22 25)` - Exata brand color, conveys energy, urgency, and confidence in calls-to-action
- **Secondary Colors**: 
  - Neutral Gray `oklch(0.25 0 0)` - Professional anchor for text and dark backgrounds
  - Soft Gray `oklch(0.96 0 0)` - Subtle background differentiation without harsh contrast
- **Accent Color**: Vibrant Red `oklch(0.60 0.24 25)` - Hover states and highlighted interactive elements
- **Foreground/Background Pairings**:
  - Primary Red `oklch(0.55 0.22 25)`: White text `oklch(1 0 0)` - Ratio 5.2:1 ✓
  - Neutral Gray `oklch(0.25 0 0)`: White text `oklch(1 0 0)` - Ratio 14.1:1 ✓
  - Soft Gray `oklch(0.96 0 0)`: Dark Gray text `oklch(0.25 0 0)` - Ratio 12.8:1 ✓
  - White `oklch(1 0 0)`: Dark Gray text `oklch(0.25 0 0)` - Ratio 14.5:1 ✓

## Font Selection

Typography should balance financial credibility with modern approachability - crisp geometric sans-serif with excellent legibility at all sizes.

- **Primary Typeface**: Inter (Display & UI)
- **Typographic Hierarchy**:
  - H1 (Hero): Inter Bold / 56px / -0.02em letter spacing
  - H2 (Section Titles): Inter Bold / 36px / -0.01em letter spacing
  - H3 (Cards): Inter SemiBold / 20px / normal spacing
  - Body: Inter Regular / 16px / 1.6 line-height
  - Small/Legal: Inter Regular / 12px / 1.5 line-height
  - Button: Inter SemiBold / 16px / normal spacing

## Animations

Animations should enhance comprehension and provide satisfying feedback without delaying user tasks. Financial data transitions should be smooth and professional, reinforcing accuracy and precision.

Key animation moments: Hero entrance (subtle fade + slide up), product card selection (scale + shadow lift), slider value changes (number counter), chart visualizations (draw-in on viewport), modal open/close (fade + scale), hover states (subtle color transitions 200ms). All animations use ease-out curves for natural deceleration. Parallax effects minimal - priority on clarity over decoration.

## Component Selection

- **Components**:
  - `Card` - Product cards and info panels with shadow elevation on selection
  - `Button` - Primary CTAs with full rounded corners, secondary with outline variant
  - `Dialog` - Partner login modal with overlay backdrop
  - `Slider` - Range inputs for loan amount and term with custom red accent
  - `Separator` - Subtle dividers between content sections
  - `ScrollArea` - Mobile menu overflow handling
  - `Badge` - "Exata Grupo" label with subtle background
  - `Tabs` - Potential use for organizing product information

- **Customizations**:
  - Custom SVG donut chart component (not provided by Shadcn)
  - Custom bar chart component for market comparison
  - Range slider styling to match red brand (CSS accent-color + Tailwind)
  - Animated number counter for calculated values
  - Gradient backgrounds with geometric patterns for visual interest

- **States**:
  - Buttons: Default, Hover (darker + lift), Active (pressed), Focus (ring)
  - Product Cards: Inactive (subtle shadow), Selected (red border + lift + shadow), Hover (shadow increase)
  - Sliders: Dragging (larger thumb), Hover (show tooltip), Focus (ring)
  - Modal: Entering (fade + scale from 95%), Exiting (fade + scale to 95%)

- **Icon Selection**: 
  - Phosphor Icons (already installed) - use regular weight for consistency
  - Building (Exata brand), Calculator (simulation), CreditCard, Briefcase, HeartHandshake (products)
  - TrendingUp (market advantage), ShieldCheck (security), Lock (partner access)
  - ArrowRight (CTAs), Menu/X (mobile nav)

- **Spacing**:
  - Section padding: py-20 (80px vertical)
  - Card padding: p-8 to p-12 (32-48px)
  - Component gaps: gap-4, gap-6, gap-8 (16, 24, 32px)
  - Button padding: px-8 py-4 (32px horizontal, 16px vertical)
  - Consistent 8px spacing scale throughout

- **Mobile**:
  - Hero: Single column, reduce heading to 36px, stack CTAs vertically
  - Product Grid: 2 columns on mobile, 3 on tablet, 5 on desktop
  - Simulator: Stack controls over visualization on mobile
  - Navigation: Hamburger menu with slide-down panel
  - Sliders: Touch-friendly thumb size (24px minimum)
  - All interactive elements minimum 44px touch targets
