# React Web Developer Portfolio (Updated)

This project showcases an updated version of a portfolio website built with React, showcasing skills and basic information about a web developer.

## Table of Contents

- [Overview](#overview)
- [Screenshot](#screenshot)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [License](#license)

## Screenshot

![Portfolio Screenshot](screenshot.png)

## Installation

1. Clone the repository:


   ```bash
   git clone https://github.com/Jonahida/react-ultimate-course-2024.git
   cd react-ultimate-course-2024/part-01-fundamentals/challenge-02-profile-card-V2/
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Usage

After completing the installation steps, you can start the application by running:

```bash
npm start
```

Open http://localhost:3000 to view it in the browser.

## Differences from Previous Version

### Component Changes

- **Skill Component**: The Skill component has been updated to accept level and color directly as props instead of calculating them within the component.

### Code Update

- The code now uses an array skills to store skill data, allowing for easier management and rendering of skills.

### UI Changes

- Skills are now displayed with a background color based on the color prop from the skills array.
- Each skill level is represented by an emoji (💪 for advanced, 👍 for intermediate, 👶 for basic).

## Technologies Used

- React
- HTML5
- CSS3

## License

This project is licensed under the MIT License. See the LICENSE file for details.
