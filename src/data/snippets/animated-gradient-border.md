# Animated Gradient Border

Using registered-custom-properties

### HTML

```html
<button>Click me</button>
```

### CSS
```css
@property --deg {
    syntax: "<angle>";
    initial-value: 0turn;
    inherits: true;
}

@keyframes rotate {
    to {
        --deg: 1turn;
    }
}

button {
    border: 4px solid transparent;
    background:
        linear-gradient(white) padding-box,
        conic-gradient(from var(--deg), red, blue, red) border-box;

    font: inherit;
    color: black;
    padding: .25em 1em;
    border-radius: .25rem;

    animation: rotate 2s linear infinite;
}