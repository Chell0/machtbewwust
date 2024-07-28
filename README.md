# MachtBewwust Blog Website

Welcome to the MachtBewwust Blog Website! This project is a modern, dynamic blog website built using Sanity as the headless CMS and Next.js for the frontend.

## Table of Contents

- [MachtBewwust Blog Website](#machtbewwust-blog-website)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Application](#running-the-application)
  - [Project Structure](#project-structure)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)

## Introduction

The MachtBewwust Blog Website is designed to provide a seamless blogging experience, allowing authors to create and manage content efficiently. The website leverages Sanity's powerful content management capabilities and Next.js's performance-oriented framework.

## Features

- **Dynamic Content Management**: Create, edit, and delete blog posts with ease using Sanity CMS.
- **Author Profiles**: Each blog post is associated with an author, complete with bio and profile picture.
- **SEO Friendly**: Optimized for search engines to ensure your content reaches a wider audience.
- **Responsive Design**: Fully responsive layout ensures the blog looks great on all devices.
- **Fast Performance**: Built with Next.js for optimal performance and fast page loads.

## Technologies Used

- **Sanity**: Headless CMS for managing content.
- **Next.js**: React framework for building server-side rendered and static web applications.
- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Core programming languages for the project.
- **HTML/CSS**: Markup and styling.
- **TailwindCSS**: Utility-first CSS framework for rapid UI development.
- **Node.js**: JavaScript runtime for building server-side applications.
- **Bun**: A fast, modern JavaScript runtime like Node.js but designed with better performance and developer experience in mind.

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js and npm installed on your machine.
- A Sanity account and project set up.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/machtbewwust.git
   cd machtbewwust
   ```

2. **Install dependencies**:

   ```bash
   bun install
   ```

3. **Set up Sanity**:

   - Follow the [Sanity documentation](https://www.sanity.io/docs) to set up your Sanity project.
   - Configure the `sanity.json` file with your project ID and dataset.

4. **Environment Variables**:

   - Create a `.env.local` file in the root directory.
   - Add the following environment variables:

     ```bash
     SANITY_PROJECT_ID=your_sanity_project_id
     SANITY_DATASET=your_sanity_dataset
     ```

### Running the Application

To run the application in development mode, use the following command:

```bash
bun dev
```

The website will be available at `http://localhost:3000`.

## Project Structure

```bash
/machtbewwust
│
├── /components
│   ├── /About
|   |   |-- About.tsx
│   ├── /Banner
|   |   |-- Banner.tsx
│   └── /BlogCard
|   |   |-- BlogCard.tsx
|   |-- /Category
|   |   |-- Category.tsx
|   |-- /Datenbank
|   |   |-- Datenbank.tsx
|   |-- /Footer
|   |   |-- Footer.tsx
|   |-- /Kalender
|   |   |-- Kalender.tsx
|   |-- /MaterialCards
|   |   |-- MaterialCards.tsx
|   |-- /NavBar
|   |   |-- NavBar.tsx
|   |-- /Newsletter
|   |   |-- Newsletter.tsx
|   |-- /Pagination
|   |   |-- Pagination.tsx
|   |-- /Section
|   |   |-- Section.tsx
|   |-- /ShowMoreButton
|   |   |-- ShowMoreButton.tsx
|   |-- /Tags
|   |   |-- Tags.tsx
│
├── /app
|   |---/arbeitsmaterial
|   |   |-- page.tsx
|   |---/bildungsmaterial
|   |   |-- page.tsx
|   |---/datenbank
|   |   |-- page.tsx
|   |---/datenschutz
|   |   |-- page.tsx
|   |---/impressum
|   |   |-- page.tsx
|   |---/kalender
|   |   |-- page.tsx
|   |---/lib
|   |   |-- interface.ts
|   |   |-- sanityClient.ts
|   |---/literatur
|   |   |-- page.tsx
|   |---/material
|   |   |-- page.tsx
|   |---/podcasts
|   |   |-- page.tsx
|   |---/themen
|   |   |-- page.tsx
|   |   |---/[slug]
|   |   |   |-- page.tsx
|   |---/videos
|   |   |-- page.tsx
|   |---/webseiten-und-blogs
|   |   |-- page.tsx
│   ├── favicon.ico
│   ├── layout.tsx
│   └── page.tsx
│
├── /public
│   ├── /images
│
├── /styles
│   ├── globals.css
│
├── /sanity
│   ├── schemas
│   │   ├── author.ts
│   │   └── category.ts
|   |   |-- datenbank.ts
|   |   |-- event.ts
|   |   |-- index.ts
|   |   |-- material.ts
|   |   |-- tag.ts
|   |   |-- themen.ts
│   └── sanity.cli.ts
│
├── .env.local
├── package.json
└── README.md
```

## Usage

1. **Create Content**: Use Sanity Studio at `http://localhost:3333` to create and manage your blog posts and author profiles.
2. **View Blog**: Access the blog at `http://localhost:3000` to see your content live.

## Contributing

We welcome contributions to the MachtBewwust Blog Website! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes.
4. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
