# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshots

![](./screencapture1.png)
![](./screencapture2.png)


### Links

- Solution URL: [https://github.com/hlimouni/interactive-rating-component](https://github.com/hlimouni/interactive-rating-component)
- Live Site URL: [https://hlimouni.github.io/interactive-rating-component/](https://hlimouni.github.io/interactive-rating-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

React is really helpful for creating component's UI and the logic associated with it at the same place,
this is my first project using React and I'm loving it so far, I've learned how to use states using useState function :joy:, and how the states should existed in the parent component as you can't pass states up the component tree, also I used Context API to make states and there associated setstates functions available for the children without passing them as props, sort of making them "global" at the partent component scope and all of its derived children.
Also the map function comes really handy, as in this example with very little code you can avoid repetition and jsx accepts the mapped array of components as valid component, very cool.

```js
function RatingScale() {
  const ratings = [1, 2, 3, 4, 5];
  return (
    <div className='rating-scale'>
      {ratings.map((rating, key) => (<GradeButton key={key} number={rating} />))}
    </div>
  );
}
```

## Author

- Website - [Hossam Limouni](https://www.your-site.com)
- Frontend Mentor - [@hlimouni](https://www.frontendmentor.io/profile/hlimouni)