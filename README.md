# React EaselJS Drawing Application

This project is a drawing application built using React and EaselJS that allows users to add, select, move, and delete shapes such as rectangles, circles, and lines. Additionally, it supports exporting and importing shape data in JSON format.

## Features

- Add Rectangles, Circles, and Lines with random colors.
- Select and move individual shapes.
- Delete selected shapes or all shapes.
- Export shape data to a JSON file.
- Import shape data from a JSON file.
- Real-time scene updates with dynamic interactions.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- EaselJS: A library for working with the HTML5 canvas element, allowing interactive graphics.
- UUID: For generating unique IDs for the shapes.
- HTML5 File API: Used for importing and exporting JSON data.

### Installation

1. Clone the repository:

```bash git clone <repository-url> ```

2. Navigate to the project directory:

```bash cd react-easeljs-drawing-app```

3.Install dependencies: Ensure you have Node.js installed, then run:

```bash npm install ```

4.Start the development server:

```bash  npm start ```

5.Open your browser: The application will be available at http://localhost:3000.
 

### Usage

- Add Shapes: Use the buttons to add rectangles, circles, or lines.
- Select Shapes: Click on a shape to select it. The selected shape's color will change to red.
- Move Shapes: Drag and drop shapes to move them around the canvas.
- Delete Shapes: Click the "Delete Selected Shape" button to delete the selected shape, or "Delete All Shapes" to clear the canvas.
- Export: Click the "Export to JSON" button to download the shapes as a JSON file.
- Import: Use the file input to load shapes from a previously exported JSON file.

### Project Structure

-  App.js: The main React component that manages shape creation, selection, movement, and deletion using the EaselJS library.
-  Shapes are drawn and manipulated on the canvas using EaselJS, allowing real-time interaction.

### Keyboard Shortcuts

- Delete: : Deletes the selected shape.

### Future Improvements

- Add shape resizing functionality.
- Enable group selection and manipulation of multiple shapes.
- Implement more complex undo/redo functionality for shape manipulations.
