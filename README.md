# Sign Up & Log In Form

A fully handcrafted authentication interface using only HTML, CSS and JavaScript—no frameworks or templates.

## 📋 Project Overview  
This single‐page component combines both Sign Up and Log In workflows. It demonstrates dynamic form toggling, client‐side validation, and simulated social sign‑in buttons, all built from scratch.

## ✨ Key Features  
- **Dual Mode Interface** 🔄  
  - Seamlessly switches between “Sign Up” and “Log In” views without page reload  
  - Maintains form state and validation feedback across modes  

- **Real‑time Validation** ✅❌  
  - Sign Up: checks for nonempty full name, valid email format, password strength and matching confirmation  
  - Log In: ensures email format and nonempty password  
  - Inline error messages appear and disappear as the user types  

- **Social Sign‑In Buttons** 👍  
  - “Continue with Google” and “Continue with Facebook” buttons styled to mimic real OAuth flows  
  - Click handlers can be wired to real providers in a back‑end integration  

- **Responsive Design** 📱💻  
  - Mobile‑first layout adjusts to tablet and desktop widths  
  - Flexible input widths, adaptive margins and stacking  

- **Accessible Markup** ♿  
  - Proper `<label>` tags linked to inputs  
  - Visible focus outlines for keyboard navigation  
  - ARIA‑friendly error messages announced on validation failure  

- **Modern Styling** 🎨  
  - CSS custom properties for easy theme tweaks  
  - Smooth transitions on hover, focus, and mode toggle  
  - Clear visual hierarchy using spacing and font sizing  

## ⚙️ Technical Breakdown  
1. **HTML Structure**  
   - Two `<form>` sections wrapped in a container with a toggle control  
   - Semantic elements: headings, fieldsets, legends, labels, inputs, buttons  

2. **CSS Styling**  
   - Variables for colors, fonts, spacing and border‑radius  
   - BEM‑inspired classes for predictable styling  
   - Media queries at key breakpoints  

3. **JavaScript Behavior**  
   - Mode toggle logic bound to clickable labels  
   - Event listeners on `input` and `submit` for validation  
   - Utility functions for email regex testing and password matching  
   - Dynamic feedback: adds/removes classes to show errors or success  

## 🚀 Potential Next Steps  
- Integrate real authentication endpoints (REST or GraphQL)  
- Implement persistent state with localStorage or cookies  
- Introduce a light/dark theme toggle using CSS variables  
- Enhance security with CAPTCHA or rate‑limiting on submit  

## 📝 Conclusion  
This project is an excellent foundation for learning how to build interactive, accessible authentication forms without relying on external libraries. Feel free to expand it with back‑end logic and advanced UX enhancements! 😃  
