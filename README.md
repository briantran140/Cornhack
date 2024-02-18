# UNL Cornhacks - BeatTheOdds

In the past few years, there has been a very prevalent mental health crisis in our communities. With anxiety and depression rates in college student rising at an alarming rate, it is becoming more and more important to have mental health outlets and resources readily available. We took it upon ourselves to develop a web application that serves as a pipeline to connect college students to their college's counseling and psychological services. Without seeking support, the odds are stacked against you. End the stigma surrounding mental health. *Beat the odds.*

## Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

---

## About

In response to the escalating mental health crisis among college students, BeatTheOdds is a web application dedicated to fostering mental health awareness and providing a supportive platform for individuals to seek help. With rising rates of anxiety and depression, our mission is to end the stigma surrounding mental health and empower students to navigate their mental well-being successfully.

---

## Features

- **Connection to Counseling Services:** Seamlessly connect college students to their college's counseling and psychological services.
- **Mental Health Resources:** Provide a centralized hub for mental health resources, information, and support.
- **User-Friendly Interface:** An intuitive and user-friendly web application designed to ensure a positive user experience.

---

## Technologies Used

BeatTheOdds is built using a combination of modern technologies to provide a seamless and engaging experience for users.

### Frameworks and Libraries

- **Next.js:** BeatTheOdds is built on Next.js, a powerful React framework that enables server-side rendering, efficient routing, and simplified development.

- **Framer Motion:** We utilize Framer Motion for smooth and interactive animations, creating an engaging user interface.

- **React-google-charts:** To visualize data effectively, we employ the React wrapper for Google Charts, enabling dynamic and responsive chart displays.

### Data Integration

- **Axios:** The application uses Axios for making HTTP requests, facilitating the integration of external data sources, such as the U.S. Department of Health and Human Services API.

### Deployment

- **Vercel:** BeatTheOdds is deployed and hosted on Vercel, providing a reliable and scalable platform that ensures optimal performance.

### Development and Collaboration

- **Git & GitHub:** Version control and collaboration are managed using Git, with the project repository hosted on GitHub.

---

## Getting Started

To run this project locally, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/BeatTheOdds.git
2. **Naviget to the Project Directory:**
    ```bash
    cd BeatTheOdds
3. **Install Dependencies:**
    ```bash
    npm install
4. **Run the Application:**
    ```bash
    npm run dev
By default, this application should be running on `http://localhost:3000`

---
## API
### Developer
The API endpoints used in this application are provided by the U.S. Department of Health and Human Services.

- **Link:** [U.S. Department of Health and Human Services APIs](https://health.gov/our-work/national-health-initiatives/health-literacy/consumer-health-content/free-web-content/apis-developers)
- **Base URL:** `https://health.gov/myhealthfinder/api/v3`

### Endpoints:

### Topic Search
- **Endpoint:** `topicsearch.json`
- **Description:** Retrieves information about a particular health topic.
- **Query Parameters:**
  - `lang`: Language of the content (en or es)
  - `topicId`: ID of the topic
  - `categoryId`: ID of the category
  - `keyword`: Keyword to search within topics

### MyHealthFinder
- **Endpoint:** `myhealthfinder.json`
- **Description:** Retrieves a list of resources suitable for a person based on their demographics and health status.
- **Query Parameters:**
  - `lang`: Language of the content (en or es)
  - `age`: Age of the person
  - `sex`: Sex of the person
  - `tobaccoUse`: Whether the person uses tobacco (0 or 1)
  - `sexuallyActive`: Whether the person is sexually active (0 or 1)
  - `pregnant`: Whether the person is pregnant (0 or 1)
  - `category`: Category of health resources

### Item List
- **Endpoint:** `itemlist.json`
- **Description:** Retrieves a list of all health topics.
- **Query Parameters:**
  - `lang`: Language of the content (en or es)
  - `type`: Type of topics

### Implementation Notes
- All three endpoints are being fetched in the application.
- Due to time constraints, the data retrieved from `myhealthfinder.json` and `itemlist.json` endpoints are not currently displayed within the application. However, they are available for use and integration into future features.
- For more detailed information about each endpoint and its usage, please refer to the [official documentation](https://health.gov/our-work/national-health-initiatives/health-literacy/consumer-health-content/free-web-content/apis-developers) provided by the U.S. Department of Health and Human Services.

---

## Contributing

We welcome contributions from the community. If you'd like to contribute to the project, please follow these guidelines:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make your changes and submit a pull request.
- For bug reports, feature requests, or general questions, please open an issue.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

MIT License

[Full license text](LICENSE)
