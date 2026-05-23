# Instagram Clone

A static Instagram-style social feed featuring history's most chaotic artists built from scratch with HTML, CSS, and JavaScript.
<div align="center">
  <img width="600" height="980" alt="ig" src="https://github.com/user-attachments/assets/b4a766bc-700c-414b-b2a4-8cf4f0882baa" />
  <br/>
  <a href="https://ig-clone-mazen.netlify.app/">Live Demo</a>
</div>


## About

Oldagram is a frontend project that mimics a basic Instagram feed. Posts are rendered dynamically from a JavaScript data array, meaning new posts can be added without touching the HTML. Features three legendary (and very online) painters: Van Gogh, Courbet, and Ducreux.

## Features

- Dynamically rendered posts from a JavaScript data array
- Responsive centered layout that works on any screen size
- Clean card-based feed with avatar, location, post image, likes, and caption
- Hover effects on action icons
- Images cropped cleanly with `object-fit: cover` regardless of original dimensions

## Tech Stack

- HTML5
- CSS3 (Flexbox)
- Vanilla JavaScript (no frameworks, no libraries)

## Getting Started

No build steps, no dependencies, you can just open it.

```bash
git clone https://github.com/yourusername/oldagram.git
cd oldagram
open index.html
```

Or just open `index.html` directly in your browser.

## Adding a New Post

Open `index.js` and add a new object to the `posts` array:

```javascript
{
    name: "Frida Kahlo",
    username: "frida1907",
    location: "Coyoacán, Mexico",
    avatar: "images/avatar-frida.jpg",
    post: "images/post-frida.jpg",
    comment: "painted my feelings again, no notes",
    likes: 843
}
```

That's it — the post renders automatically.

## Live Demo

[View on Netlify](https://ig-clone-mazen.netlify.app/)

## License

MIT
