# Property Cards App

This is a simple React.js single-page application that displays property cards fetched from an API based on the property type filter.

## Task Description

The data for the property cards is retrieved from an API that takes the `propertyType` as a request parameter. The application implements the following behavior:

- **Case 1**: By default, no button is selected, and the API is called without the `propertyType` field.
- **Case 2**: Clicking the Hotel button changes its background, calls the API with `propertyType=Hotel`, and reloads the cards.
- **Case 3**: Clicking the Hotel button again deselects it, removes `propertyType` from the API request, and refreshes the cards.
- **Case 4**: Clicking the Holiday Home button deselects Hotel, selects Holiday Home, adds `propertyType=Holiday%20Home` to the API request, and reloads the cards.

The application also includes pagination.

## Technology Stack

- React.js
- Tailwind CSS
- GitHub (Code Hosting)
- Netlify (Hosting)

## Getting Started

1. Clone the repository: `git clone https://github.com/yourusername/property-cards-app.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Open your browser and navigate to: `http://localhost:3000`

## Deployment

The application is deployed using Netlify and can be accessed [here](https://your-netlify-app-url.netlify.app).

## Usage

1. Click property type buttons to filter cards.
2. Follow the behavior described in the task.

## About

This project was created for the Ghuddy assignment.

## License

This project is licensed under the [MIT License](LICENSE).
