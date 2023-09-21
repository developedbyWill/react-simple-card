React Simple Card Project Documentation

Table of Contents

1. Introduction
2. Project Structure
3. Components
   -Title Component
   -Description Component
   -Image Component
   -TimeAgo Component
   -Location Component
   -SimpleCard Component
4. Styling
5. Usage
6. Conclusion

7. Introduction

The React Simple Card project is a basic React application that demonstrates the creation of a simple card component by assembling smaller components. This documentation provides an in-depth explanation of the project's structure, components, styling, and how to use it.

2. Project Structure

The project has the following directory structure:

react-simple-card/

- public/
  - Image/
    - will.jpeg
- src/
  - Components/
    - Title.js
    - Description.js
    - Image.js
    - TimeAgo.js
    - Location.js
    - SimpleCard.js
  - App.js
  - App.css
- ...

- `public/`: Contains static assets like images.
- src/`: Houses the main source code.
- Components/`: Directory for all the custom React components.
- App.js`: The main application component.
- App.css`: Styling for the main application component.

3. Components

Title Component
The `Title` component is a functional component that takes a text` prop and displays it as the card's title.

Description Component
The `Description` component is a class component that takes a text` prop and displays it as the card's description.

Image Component
The `Image` component is a functional component that takes an imageUrl` prop and renders an image.

TimeAgo Component
The `TimeAgo` component is a functional component that displays a timestamp in a user-friendly relative time format, taking a `time` prop.

Location Component
The `Location` component is a functional component that displays a location, taking a `location` prop.

SimpleCard Component
The `SimpleCard` component is a class component that serves as the main card component. It assembles the `Title`, `Description`, `Image`, `TimeAgo`, and `Location` components and accepts various props for customization.

4. Styling

Styling is accomplished using CSS within the `App.css` file. Key styling elements include:

- `font-family`: Applies the Space Mono font family to the entire card.
- `border`: Adds a border to the card.
- `margin`: Defines the margin around the card.
- `padding`: Specifies the padding within the card.
- `border-radius`: Rounds the corners of the card.
- `background-color`: Sets the background color of the card.
- `box-shadow`: Adds a subtle shadow to the card.
- `max-width`: Limits the maximum width of the card.
- `text-align`: Adjusts text alignment.
- `align-items`: Aligns items within the card container.

5. Usage

To use the Simple Card component, follow these steps:

1. Import the necessary components into your application.
2. Create an instance of the `SimpleCard` component, passing in the required props (`title`, `description`, `imageUrl`, `time`, and `location`).
3. Render the `SimpleCard` component in your application.

Example:

import React from "react";
import "./App.css";
import SimpleCard from "./Components/SimpleCard";

function App() {
return (
<div className="App">
<SimpleCard
        title="William Agbomadzi"
        description="You go dey explain taya. You go dey explain, explain, explain because no evidence!!!"
        imageUrl="/Image/will.jpeg"
        time="2 hours ago"
        location="Marina"
      />
</div>
);
}

export default App;

6. Conclusion

This documentation covers the project structure, component details, styling, and how to use the components in a React application.
