# Components

## Single Column Grid to Two Column Grid

HTML
<div class="hero-seciton">
    <div class="hero-item"><div>
<div>

CSS
'.hero-seciton {
    display: grid;
    grid-template-columns: 1fr;

    @media screen and (width >=700px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }
}'
