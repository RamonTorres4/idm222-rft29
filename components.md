# Components

## Grid Hero Component
This component is used for the main hero grid component.

**HTML Code**
```
<div class="hero-seciton">
                <div class="hero-item"><a href="portfolio.html">
                        <h2>Portfolio</h2>
                        <img
                            src="images/portfolio/car-show-01-medium.jpg"
                            srcset="images/portfolio/car-show-01-small.jpg 320w,
                        images/portfolio/car-show-01-medium.jpg 640w,
                        images/portfolio/car-show-01-large.jpg 1024w"
                            sizes="(max-width: 600px) 100vh,
                        (max-width:1200px) 50vw,
                        33vw"
                            alt="a red car" loading="lazy" />
                    </a>
                </div>
```

**CSS Code**
```
.hero-seciton {
    display: grid;
    grid-template-columns: 1fr;

    @media screen and (width >=700px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }
}
```

**Example:**
<div class="hero-seciton">
                <div class="hero-item"><a href="portfolio.html">
                        <h2>Portfolio</h2>
                        <img
                            src="images/portfolio/car-show-01-medium.jpg"
                            srcset="images/portfolio/car-show-01-small.jpg 320w,
                        images/portfolio/car-show-01-medium.jpg 640w,
                        images/portfolio/car-show-01-large.jpg 1024w"
                            sizes="(max-width: 600px) 100vh,
                        (max-width:1200px) 50vw,
                        33vw"
                            alt="a red car" loading="lazy" />
                    </a>
                </div>

## Responsive Images
This code is used for responsive images. The first line, the src is a backup for older browsers.
```
<img
src="images/case-studies/plastic-free-philly-01-medium.jpg"
srcset="images/case-studies/plastic-free-philly-01-small.jpg 320w,
images/case-studies/plastic-free-philly-01-medium.jpg 640w,
images/case-studies/plastic-free-philly-01-large.jpg 1024w"
sizes="(max-width: 600px) 100vh,
(max-width:1200px) 50vw,
33vw"
alt="a red car" loading="lazy" />
```
**Example:**

<img
src="images/case-studies/plastic-free-philly-01-medium.jpg"
srcset="images/case-studies/plastic-free-philly-01-small.jpg 320w,
images/case-studies/plastic-free-philly-01-medium.jpg 640w,
images/case-studies/plastic-free-philly-01-large.jpg 1024w"
sizes="(max-width: 600px) 100vh,
(max-width:1200px) 50vw,
33vw"
alt="a red car" loading="lazy" />