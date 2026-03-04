# idm222-rft29 project

This documnent is where I will keep all of my design choices so I can reference them later.

## Navigation
Homepage
- Portfolio
- Case Studies
- About
- Hobbies
This is for both the header navigation and footer.

## Screen Sizes
- Small: Less than 700px
- Medium: 700px to 1023px
- Large: 1024px



## Images

### Image Sizing

`Small - 320w` 

`Medium - 640w` 

`Large - 1024w`

Aspect Ratio 4x6 for hero images

## Component Spacing
- xs-spacing: 0.5rem; (This is for small gaps)
- sm-spacing: 1rem; (This is the standard spacing)
- md-spacing: 1.5rem; (This spacing for between grouped elements)
- lg-spacing: 2rem; (This is for spacing between sections)
- xl-spacing: 3rem; (This is for large spacing between layouts)
<!-- - img-spacing: 0.5rem (Depericate and use xs-spacing) -->
--list-indent-spacing: 2.5rem; (This is to add an indent to ul/ol items)


<!-- ## Color Palette
- primary: #2E605D
- secondary: #FFD873
- accent: #EFF5EC
- neutral-light: #97A1A2
- neutral-dark: #363636 -->

### Light Mode
    --light-brand-primary: #2e615e; 
    --light-accent-primary: #C58C2B;
    --light-bg-primary: #F8FCFC;
    --light-bg-surface: #FFF;
    --light-bg-section: #E4F1F0;
    --light-text-primary: #1D2F2E;
    --light-text-secondary: #3E605C;
    --light-text-muted: #6F908E;
    --light-ui-element-border: #B6D0CD;
    --light-ui-element-hover: #377874;
    --light-ul-element-focus-ring: #1E4E4B;
    --light-status-color-success: #3D9D7D;
    --light-status-color-warning: #B86C29;
    --light-status-color-error: #B22925;
    --light-status-color-info: #2E918C; 

### Dark Mode
    --dark-brand-primary: #5CB3AD; 
    --dark-accent-primary: #E4B33F;
    --dark-bg-primary: #0D1F1D;
    --dark-bg-surface: #132B29;
    --dark-bg-section: #1C3B37;
    --dark-text-primary: #E7F4F4;
    --dark-text-secondary: #B5D3CF;
    --dark-text-muted: #FFFFFF;
    --dark-ui-element-border: #2E5652;
    --dark-ui-element-hover: #70C9C3;
    --dark-ul-element-focus-ring: #96D6D4;
    --dark-status-color-success: #5DC097;
    --dark-status-color-warning: #E1A226;
    --dark-status-color-error: #F15D5E;
    --dark-status-color-info: #63C6C1;   

## Icons

### SVG Codes

#### SVG Home Logo 
<svg class="logo" width="100" height="100"
                    viewBox="0 0 200 200"
                    fill="none" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect width="105" height="226"
                        fill="url(#pattern0_86_855)" />
                    <defs>
                        <pattern id="pattern0_86_855"
                            patternContentUnits="objectBoundingBox" width="1"
                            height="1">
                            <use xlink:href="#image0_86_855"
                                transform="matrix(0.0071746 0 0 0.00333333 -0.00222222 0)" />
                        </pattern>
                        <image id="image0_86_855" width="140" height="300"
                            preserveAspectRatio="none"
                            xlink:href="data:image/png;base64,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" />
                    </defs>
                </svg>

#### SVG Hamburger Icon
<svg width="50" height="50" viewBox="0 0 125 115" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="125" height="25" rx="12.5" fill="white"/>
<rect y="45" width="125" height="25" rx="12.5" fill="white"/>
<rect y="90" width="125" height="25" rx="12.5" fill="white"/>
</svg>


#### SVG X Icon
<svg width="50" height="50" viewBox="0 0 126 127" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="21" y="0.461914" width="148.492" height="29.6985" rx="14.8492" transform="rotate(45 21 0.461914)" fill="white"/>
<rect y="105" width="148.492" height="29.6985" rx="14.8492" transform="rotate(-45 0 105)" fill="white"/>
</svg>

#### Instagram Icon
<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg>

#### Linked-In Icon
<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>


#### Blue Mana Symbol
<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="50" height="50" fill="url(#pattern0_113_562)"/>
<defs>
<pattern id="pattern0_113_562" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_113_562" transform="scale(0.02)"/>
</pattern>
<image id="image0_113_562" width="50" height="50" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7NJREFUeNrkmk1oE0EUgLeLt1rJQQr+HNJLRekhoFBvjaI3CwEvbS9NKFRPNVIVhMo2KBTEQuxJBUl6qb2IgRwVk9wsKOQgir00B3+geAiKd+cNb5dtMpOdn7eNxQfTpWl29n19v7MzAw6BvNn+mWCXNBspNibwmpB8vc1GE0eDjfql0aNtWx0GLAEy7DLLRsZSjwob6wyosq8gDCDLLh4bSYdWWmwUGFA5VhAGAO5TigFABJRjQHVSEIwBsEDe2V8pooUiY8hVhKhRQOxsf3aqGyWdW+CZNdTBHIRNANlnB7OQNcTS/IzJrVwH1EUfBG+s9UijyrJVf80h/vz+5YycOmMyRQItk9ICYTckqSDeVl86K4vXOQTIyOhp06kSvdzMlcTEKyqIteU7we+DQ0f4sBApjMgiHlVMPF99sOczC2t0xozXEwTrRJ4qsH13ikHyqKvUIiXbJ4Dy4ZgIy+6Pb5QwJSEIth3WFRsgdr9/Ff5N9rmhJFHnLot4tjNDTHz8sBWZignF2wOCXayVNQBApWoTgyRR98AisxRxoVociZMA193FnGy1noBaoaocfK/6okwJkgEGF1d2Vi6l6y6bTx/zFE0oaReXpsYuFa7cWlb0blOCpFybKg4uYppSwSKbz9aoQCaMQbivb9jVT0IX4xZJmFqDIvvIugDdZtLtlzXC1Z7CxYxAqGsB/FNsC6UxCIWE1yY6tYgEBB5GBQLrk6lrN4J5O9cvsYJENYW6FpmaX3CGj58MVpSm6RxAtN67UlZk/0UEwAQp2Szw2wDS1LLI+3dkIGNnx/n14uTVIF4M3bYJIA2nDwKK+yBhKIgVA6s3tC1CJePpy0I34+775ZORRer/Aojl2r7u4gviSj9ciyj2KsDgp991UwWM1/eP7vNY8NudcFofPnZCZyqu+yH4ATtFbJXVUlm3gy9TFESAuDl9Rfg3v64oSMvf5QoXxIJOyoxTNJ5R6KrsuN3VUnkIlXvpJgGBNcqyFiWnMsPkTC42EI25c9JeC/fsipEPm87GYhWwtqJbFTv3F12J3zVVmj3qdDx3655S8RPFcxcI1pULUc0kuAD0SFQyt7iksu3AdRNtjgrbeFWYheWHJDCK80ghQHpuT6vuI0LrDW9EdAXqxd3VJzqWkLp85D57aHs6pfISARZHKgAQY4rWbPayhDJICEbpwIDfhvsth9/JQkcweHjIGTt3XmcLTvnAwP91hEMAlHUO8qEaAdDBPuYkiaG0o3fwrIFXkoNnfwUYAMgnxOKIuTrZAAAAAElFTkSuQmCC"/>
</defs>
</svg>


#### Black Mana Symbol
<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="50" height="50" fill="url(#pattern0_113_563)"/>
<defs>
<pattern id="pattern0_113_563" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_113_563" transform="scale(0.02)"/>
</pattern>
<image id="image0_113_563" width="50" height="50" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>



## Fonts
### Headings & Titles

**EB Garamond**

This font will be used for header fonts, h1-h4.
```
https://fonts.google.com/specimen/EB+Garamond?preview.text=Case%20Studies&categoryFilters=Serif:%2FSerif%2F*,%2FSlab%2F*
```

**Noto Sans**

This font will be used for every other elements, including p tags, li tags, etc.
```
https://fonts.google.com/noto/specimen/Noto+Sans?preview.text=The%20red%20fox%20jumps%20over%20the%20brown%20log.&categoryFilters=Sans+Serif:%2FSans%2F*
```

### Font Spacing
- line-height: 1.4rem (22.4px) | 30px
- This is another option 2.375 (38px)
This is the default line height for paragraph text.


## Font Sizing
- xxlarge 3 rem (48px) | h1
- xlarge: 2rem (32px) | h2
- large: 1.5rem (24px) | h3
- medium: 1.125rem (18px) | h4
- small: 1 rem (16px) | p
- xsmall: 0.75rem (12px) | li


## Paragraph Text
**Paragraph Large**
- Font Noto Sans
- Weight 400
- Size 28px
- Line-Height 45px
- Paragraph Spacing 32px
- Letter spacing 0%

**Paragraph Regular**
- Font Noto Sans
- Weight 400
- Size 21px
- Line-Height 36px
- Paragraph Spacing 32px
- Letter spacing 0%

**Paragraph Small**
- Font Noto Sans
- Weight 400
- Size 17px
- Line-Height 25px
- Letter spacing 0%

**Paragraph Xsmall**
- Font Noto Sans
- Weight 400 17
- Size 15px
- Line-Height 23px
- Letter spacing 0%

### Borders
Borders have a weight of 2px for navs and footers.


### Helpful Sites
- https://codebeautify.org/rem-to-percent-converter
- https://nekocalc.com/px-to-rem-converter
- https://validator.w3.org/nu/
