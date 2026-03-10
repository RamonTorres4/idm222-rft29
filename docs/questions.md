# In Class Questions

- Why are some of the images blurry? (I think it has to do with the images not being big enough.)
- Spacing, want to check because I had that problem last time.

## How do I implement a dark mode toggle?

When I try, it does not work.

```css
@media (prefers-color-scheme: dark){
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
}
```

Rename custom protperties from --light mode and dark mode to just brand. Example:

```css
--light-brand-primary: #2e615e;
--dark-brand-primary: #5CB3AD;
```
Change to:
```css
--brand-primary: #2e615e;

@media (prefers-color-scheme: dark){
--brand-primary: #5CB3AD;

}
```

## Images too small?

Define a max-width for my Main.

```html
  <img
     src="images/about/cooking-medium.jpg"
     srcset="images/about/cooking-small.jpg 320w,
             images/about/cooking-medium.jpg 640w,
             images/about/cooking-large.jpg 1024w
             images/about/cooking-original.jpg 1600w"
     sizes="(max-width: 600px) 100vh,
            (max-width:1024px) 100vw,
            33vw"
     alt="Several empanadas lie on a shelf." loading="lazy" />
```

Define max width

## Website Error Check

# Final Project Submissions

## Due Date: Next Thursday 7am

Can submit the final now.

Two links

- Homepage Url
- Github

### Naming Repository

Torres_Ramon_12727266-IDM222

Make sure this is up to date.

### Grading Rubric

#### Code Quality

- Count errors (red)
- Won't count warnings (yellow)
- Will lose 1 point per error.

#### Functionality

- If it's on the site, it needs to work.
- Real content, no lorem-ipsum, default images.

####  Design

- Color
- Contrast
- Typography
- Re-using the same styles?
- Are they all consistent?
- Everything needs to be pleasing to the eye.

#### Submission Quality

- Must be on time
- Website link doesn't work
- Repository is not named property

#### Github Issues

- Phil will add issues to github repository to see if it needs to be fixed.