# Blog Webapp Front-end

This is the front-end for our blog webapp, built using React.js.

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/dammycute/dm-blog.git
   ```

2. Navigate to the project directory:
   ```
   cd dm-blog
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Note the Back-end base url and endpoints:
   ```
   REACT_APP_API_URL=http://localhost:8000
   ```
   Replace the URL with your actual backend API URL.

### Running the App

To start the development server:

```
npm run dev
```

The app will be available at `http://localhost:5173`.

## Features

- User authentication (register/login)
- View list of blog posts
- View individual blog post details
- Create new blog posts
- Responsive design for various screen sizes

## Routes

The application uses React Router for navigation. Here are the main routes:

- `/`: Homepage
- `/blogs`: List of all blog posts
- `/blogs/:postId`: Individual blog post details
- `/add-post`: Create a new blog post
- `/register`: User registration
- `/login`: User login

## Main Components

- `Homepage`: Displays the main landing page
- `Blog`: Shows the list of blog posts
- `BlogDetail`: Displays the details of a specific blog post
- `CreateBlogPost`: Form for creating a new blog post
- `Register`: User registration form
- `Login`: User login form

## Folder Structure

```
src/
  components/
    auth/
      login.jsx
      register.jsx
    blog/
      404.jsx
      blog.jsx
      blogdetail.jsx
      create-blog.jsx
    home/
      homepage.js
  App.js
  index.js
App.css
```

## Dependencies

- React
- React Router DOM
- DomPurify
- Draftjs

## State Management

This application uses React's built-in useState hook for local state management. For more complex state management needs, consider implementing a solution like Redux or React Context API.

## Styling

The application uses CSS for styling. The main styles are located in `App.css`.

## API Integration

The front-end interacts with a backend API. 

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

