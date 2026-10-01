# SVR IT Software Solutions – Java (Spring Boot) Edition

A pure Java version of the SVR IT Software Solutions static website, built with **Spring Boot 3.2** and **Thymeleaf**. No database, no React – just server-rendered HTML/CSS/JS.

## Tech Stack
- Java 17
- Spring Boot 3.2.5 (spring-boot-starter-web)
- Thymeleaf templating engine
- Vanilla CSS & JavaScript (no framework)
- Maven build

## Project Structure
```
java-project/
├── pom.xml
└── src/main/
    ├── java/com/svr/itsolutions/
    │   ├── SvrItSolutionsApplication.java   # Spring Boot entry point
    │   ├── controller/
    │   │   └── HomeController.java          # Routes: / and /submit-cv
    │   └── model/
    │       ├── SiteData.java                # All static content
    │       ├── Card.java
    │       ├── Stat.java
    │       └── ClientLogo.java
    └── resources/
        ├── application.properties
        ├── templates/
        │   ├── index.html                   # Main page
        │   └── fragments/                   # Section partials
        │       ├── header.html
        │       ├── hero.html
        │       ├── about.html
        │       ├── services.html
        │       ├── dreams.html
        │       ├── better-world.html
        │       ├── submit-cv.html
        │       ├── clients.html
        │       └── footer.html
        └── static/
            ├── css/styles.css               # Full stylesheet
            └── js/main.js                   # Scroll, animations, upload
```

## How to Run

**Prerequisites:** Java 17+ and Maven 3.6+ installed.

```bash
cd java-project
mvn spring-boot:run
```

Then open **http://localhost:8080** in your browser.

### Build a runnable JAR
```bash
mvn clean package
java -jar target/svr-it-solutions-1.0.0.jar
```

## Routes
| Method | Path         | Description                                    |
|--------|--------------|------------------------------------------------|
| GET    | `/`          | Renders the full homepage                      |
| POST   | `/submit-cv` | Receives CV form submission, shows flash message |

## Notes
- Visual appearance is identical to the React version (same purple `#3d0764` + cyan `#00b4f0` palette, same sections, same images).
- All data is held in `SiteData.java` – no database required.
- The CV upload is accepted client-side (PDF validation in JS); the Java endpoint only logs the form data for now.
