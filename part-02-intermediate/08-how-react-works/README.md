# Tabbed Content Application

A simple React application that displays tabbed content with interactive features like state management and conditional rendering.

## Overview

This React application showcases a tabbed interface with different pieces of content. Each tab displays a summary and details, with additional interactive elements such as showing/hiding details and a like counter. There is also a special tab that resets the state when selected.

## Screenshot

![Tabbed Content Screenshot](screenshot.png)

## How to Run

To run the Tabbed Content application locally:

1. **Clone Repository**: Clone the repository containing all project files.

```bash
   git clone https://github.com/Jonahida/react-ultimate-course-2024.git
   cd react-ultimate-course-2024/part-02-intermediate/08-how-react-works/
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the application**
```bash
npm start
```

The application will run on http://localhost:3000.

## Technologies Used
- React
- HTML5
- CSS3

## Project Structure
The main components of this application are:

- `App`: The root component that renders the Tabbed component.
- `Tabbed`: Manages the state for the active tab and renders the appropriate content based on the active tab.
- `Tab`: A button component that switches between different tabs.
- `TabContent`: Displays the content for the currently active tab with interactive elements like a like counter and a show/hide details toggle.
- `DifferentContent`: Displays content for a special tab that resets the state.