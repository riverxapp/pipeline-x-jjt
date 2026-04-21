# 🐼 Panda Template Manifest – Design Agency Template

> **This document defines how AI must understand and operate on the Design Agency template inside Panda.**  
> It is the authoritative guide for all AI-driven code suggestions.

---

## 1. Template Metadata (DO NOT MODIFY STRUCTURE)

```md
# Panda Template Manifest

template_name: "Design Agency"
template_id: "panda-design-agency-001"
template_version: "1.0.0"
template_type: "marketing-landing"
layout_style: "creative-agency"
technology_stack: ["HTML5", "CSS3"]
responsive: true
dark_mode: false
rtl_supported: false

author: "Panda Templates"
last_updated: "2026-01-04"
```

---

## 2. Template Intent & Design Philosophy

```md
## Template Intent

This template is designed for:
- Design agencies
- Branding studios
- UX/UI consultancies
- Creative service businesses

Primary goals:
- Showcase visual work
- Establish credibility
- Drive contact and inquiries
```

### Design Rules

```md
## Design Rules

- Visual-first layout
- Portfolio-led storytelling
- Strong typography hierarchy
- Clean section separation
```

⚠️ **AI DESIGN RULE**  
Do NOT introduce experimental layouts, excessive animation, or visual noise unless explicitly requested.

---

## 3. File & Folder Structure (SOURCE OF TRUTH)

```md
## File Structure

/
├── index.html                     # Primary landing page
├── design-agency/
│   ├── standalone.html            # Alternate layout page
│   ├── css/
│   │   └── style.css              # Core styles (READ-ONLY)
│   └── css/blog.css
├── vendor/                        # Third-party libraries (READ-ONLY)
├── assets/                        # Images and icons
```

### File Rules

```md
- Do NOT edit vendor files
- Do NOT rename folders or files
- Do NOT move HTML files
- Do NOT inline CSS into HTML
```

---

## 4. Change Control Rules (CRITICAL – AI ENFORCED)

### styles.css (STRICT)

```md
- style.css is READ-ONLY by default
- CSS changes are allowed ONLY if the user explicitly requests styling updates
- Vendor CSS must NEVER be edited
```

---

### Images (STRICT)

```md
Images are READ-ONLY by default.

Image changes are allowed ONLY if the user explicitly:
- Mentions the image by filename, path, section, or alt text, OR
- Provides a direct URL for the image replacement

Do NOT modify images based on vague design requests.
```

---

### Sections (STRICT)

```md
ALL sections across all HTML files are IMMUTABLE by default.

The AI MUST NOT:
- Add sections
- Remove sections
- Reorder sections
- Merge sections

Allowed ONLY if the user explicitly names the section or file.
```

---

## 5. Default AI Assumptions

```md
Unless explicitly stated by the user:

- HTML structure remains unchanged
- CSS remains unchanged
- Images remain unchanged
- All sections remain present
- Only TEXT CONTENT is editable
```

---

## 6. Sections Overview (AI NAVIGATION MAP)

```md
1. Header / Navigation
2. Hero
3. About Studio
4. Services
5. Portfolio / Case Studies
6. Process
7. Testimonials
8. Clients / Logos
9. Contact / CTA
10. Footer
```

---

## 7. Section-Level Contracts

```md
## Section: Hero

section_id: "hero"
html_container_id: "hero-section"
css_scope_prefix: ".hero"

Purpose:
- Present agency positioning
- Highlight value proposition

Editable Content:
- Headline
- Subheadline
- CTA text

Non-Editable:
- Layout
- Class names
- Visual structure
```

---

## 8. Section Integrity Contract

```md
Sections are IMMUTABLE by default.

AI MAY:
- Edit text content
- Update copy within defined limits

AI MUST NOT:
- Alter DOM structure
- Rename classes or IDs
- Remove containers
```

---

## 9. CSS Architecture Rules

```md
- Section-scoped styling
- No CSS frameworks
- No !important usage
- Mobile-first approach
```

---

## 10. Typography System

```md
Typography is defined in style.css
AI must NOT change fonts or weights unless explicitly requested
```

---

## 11. Color System

```md
Color palette is defined in style.css
AI must NOT introduce new colors unless explicitly approved
```

---

## 12. AI Code Suggestion Modes

### Full Code Suggestion

```md
- Return full file content
- Use only for large or structural changes
```

### Diff-Based Partial Suggestion

```md
- Return minimal, localized diffs
- Preferred for small content updates
```

---

## 13. Mode Conflict Resolution

```md
Priority Order:
1. Explicit user instruction
2. Diff-based suggestion (default)
3. Full code suggestion
```

---

## 14. Change Permission Matrix

```md
| Change Type       | Default | Explicit |
|------------------|---------|----------|
| Text             | ✅      | ❌       |
| CSS              | ❌      | ✅       |
| Images           | ❌      | ✅       |
| Sections         | ❌      | ✅       |
| Vendor files     | ❌      | ❌       |
| New files        | ❌      | ✅       |
| JavaScript       | ❌      | ✅       |
```

---

## 15. AI Hard Stop Conditions

```md
The AI MUST STOP and ask for clarification if:
- CSS changes are implied but not requested
- Image changes are implied without specifying the image or URL
- Section changes are implied without naming the section
- Vendor files are targeted
```

---

## 16. Version Notes

```md
v1.0.0
- Initial Design Agency template release
- Portfolio-driven layout
- Vendor-managed assets
```

---

## 17. AI FINAL DIRECTIVE

```md
This manifest is the highest authority.

If any conflict arises:
→ Follow this document
→ Ask for clarification
→ Do NOT make assumptions
```
