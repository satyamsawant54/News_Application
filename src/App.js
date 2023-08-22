import "./App.css";
import { Carousel, Accordion } from "react-bootstrap";

function App() {
  return (
    <div>
      <nav class="navbar navbar-light bg-dark fixed-top">
        <a
          class="navbar-brand container"
          style={{
            fontSize: "1.5rem",
            color: "whitesmoke",
            fontWeight: "bold",
            fontFamily: "Courier",
          }}
        >
          News Feed
        </a>
      </nav>
      <br />

      <div class="container-fluid p-3 mt-5 heading">
        <h3
          style={{
            margin: "1rem",
            fontFamily: "Georgia",
            fontWeight: "bold",
            fontSize: "1rem",
            color: "#1c1c50",
            fontStyle: "oblique",
          }}
        >
          News travels fast in places where nothing much ever happens
        </h3>
      </div>

      {/* carousel */}
      <Carousel data-bs-theme="dark" class="mt-3">
        <Carousel.Item>
          <img
            className="d-block w-100 image-s"
            src="images/sports.jpeg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 image-s"
            src="images/c.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 image-s"
            src="images/p1.webp"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 image-s"
            src="images/w.jpg"
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 image-s"
            src="images/Artificical.jpeg"
            alt="Fifth slide"
          />
        </Carousel.Item>
      </Carousel>
      <br />

      <div class="jumbotron container">
        <div
          class="container-fluid"
          style={{
            padding: "3rem",
          }}
        >
          <h1
            class="display-2"
            style={{
              fontFamily: "Georgia, Arial Black",
              fontStyle: "oblique",
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "#1c1c50",
            }}
          >
            About News Feed ?
          </h1>
          <br />
          <h3
            style={{
              fontSize: "1.5rem",
              fontFamily: "Verdana",
            }}
          >
            We gave regular latest updates from news feed to everybody. <br />
            <br />
            We provide information related{" "}
            <span
              style={{
                textDecoration: "underline",
                color: "red",
                fontWeight: "bold",
                fontFamily: "Georia, Arial Black",
              }}
            >
              sports, forecast weather, politics, information technology,
              artitificial intelligence, web development
            </span>
            , etc.
            <br />
            <br />
            So what for you waiting, just experience us without thinking.You can
            also review or rate our facilities according to our trends.
          </h3>
        </div>
      </div>

      <br />

      <div class="accordion container" id="accordionExample">
        <h1
          style={{
            fontFamily: "Georgia, Arial Black",
            fontStyle: "oblique",
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#1c1c50",
            marginLeft: "2.3rem",
          }}
        >
          View news by Category :-
        </h1>
        <br />

        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <p
                style={{
                  fontFamily: "Georgia, Arial Black",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  color: "#000",
                }}
              >
                Sports Updates
              </p>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <a
              href="https://sports.ndtv.com/asia-cup-2023/indias-asia-cup-2023-squad-jasprit-bumrah-tilak-varma-kl-rahul-big-names-in-fray-4313087"
              style={{ textDecoration: "none" }}
            >
              <div class="accordion-body">
                <div class="imgdiv image-2">
                  <img
                    src="images/2023.jpg"
                    class="accimage"
                    style={{ height: "230px" }}
                  ></img>
                </div>
                <br />
                <strong>Asia Cup and World cup updates</strong>
                <br />
                India's Asia Cup 2023 Full Squad: All Players' ODI Performance
                Since 2022 DecodedAsia Cup 2023 Team India Squad Announcement:
                Indian cricket team's Asia Cup 2023 squad was announced by
                captain Rohit Sharma and BCCI chief selector Ajit Agarkar in a
                press conference on MondayAbhishek PaulUpdated: August 21, 2023
                03:39 PM ISTRead Time:3 min India's Asia Cup 2023 Full Squad:
                All Players' ODI Performance Since 2022 Decoded Asia Cup 2023
                squad: File image of Indian cricket team captain Rohit Sharma
                and Virat Kohli© AFP Indian cricket team's Asia Cup 2023 squad
                was announced by captain Rohit Sharma and BCCI chief selector
                Ajit Agarkar in a press conference on Monday. KL Rahul, Shreyas
                Iyer and Jasprit Bumrah have made a comeback to the squad.
                However, since Rahul has a niggle, Sanju Samson has been named
                the back-up player. The Asia Cup begins on August 30. India's
                first match is against arch-rivals Pakistan on September 2 in
                Sri Lanka.
              </div>
            </a>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <p
                style={{
                  fontFamily: "Georgia, Arial Black",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  color: "#000",
                }}
              >
                Forecast Climatic Weather
              </p>
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <a
              href="https://www.mid-day.com/mumbai/mumbai-news/article/mumbai-weather-update-light-to-moderate-spells-of-rain-in-city-and-suburbs-23304947"
              style={{ textDecoration: "none" }}
            >
              <div class="accordion-body">
                <div class="imgdiv">
                  <img src="images/weather.webp" class="accimage"></img>
                </div>
                <br />
                <strong>Weather Updates of mumbai city</strong>
                <br />
                "Though the country is expected to experience normal rainfall in
                August and September, it is likely to be on the lower side (94
                per cent to 99 per cent) of the normal (422.8 mm)," IMD Director
                General Mrutyunjay Mohapatra said at a press conference.
                Rainfall recorded between 94 per cent and 106 per cent of the
                long-period average (LPA), or 50-year average, is considered
                normal. Rainfall in August is predicted to be below normal (less
                than 94 per cent of LPA), but the situation is expected to
                improve comparatively in September, the IMD said.
              </div>
            </a>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <p
                style={{
                  fontFamily: "Georgia, Arial Black",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  color: "#000",
                }}
              >
                Indian Politics and Power
              </p>
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <a
              href="https://www.mid-day.com/mumbai/mumbai-news/article/maharashtra-politics-with-ajit-pawar-in-cabinet-bins-ordinance-ncp-resented-23304402"
              style={{ textDecoration: "none" }}
            >
              <div class="accordion-body">
                <div class="imgdiv">
                  <img src="images/p.png" class="accimage"></img>
                </div>
                <br />
                <strong>Maharashtra Politics and Power</strong>
                <br />
                Maharashtra political crisis live. Rebel Shiv Sena leader Eknath
                Shinde has claimed a strength of 42 party MLAs, with more
                arriving, including those who had stayed with the party at the
                start of the revolt. The Shinde group needs 37 MLAs to
                circumvent the anti-defection law. Stay with TOI for the latest
                developments
              </div>
            </a>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <p
                style={{
                  fontFamily: "Georgia, Arial Black",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  color: "#000",
                }}
              >
                World of Web Development
              </p>
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <a
              href="https://www.codecademy.com/resources/blog/what-is-web-development/"
              style={{ textDecoration: "none" }}
            >
              <div class="accordion-body">
                <div class="imgdiv">
                  <img src="images/w2.jpg" class="accimage"></img>
                </div>
                <br />
                <strong>Web Development and technology</strong>
                <br />
                Modern web development also includes web applications. Web
                applications are software packages that run on a web server and
                are accessed through the internet. This is unlike a traditional
                application that runs on your computer, tablet, or phone.
              </div>
            </a>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              <p
                style={{
                  fontFamily: "Georgia, Arial Black",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  color: "#000",
                }}
              >
                Artificical Intelligence - The Future of our Globe
              </p>
            </button>
          </h2>
          <div
            id="collapseFive"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <a
              href="https://www.forbes.com/sites/bernardmarr/2022/10/10/the-5-biggest-artificial-intelligence-ai-trends-in-2023/?sh=475237101d3d"
              style={{ textDecoration: "none" }}
            >
              <div class="accordion-body">
                <div class="imgdiv">
                  <img src="images/A.jpg" class="accimage"></img>
                </div>
                <br />
                <strong>This is the third item's accordion body.</strong>
                <br />
                Artificial Intelligence is a technology that continues to grow
                rapidly every year. By 2023, AI will have an estimated worth of
                $42 billion. This suggests that soon enough, AI will be more
                prevalent than ever before, taking over many of our daily tasks.
                It is also reported that by 2023, AI will have reached the point
                where it will be the single most game-changing invention in the
                history of humankind.
              </div>
            </a>
          </div>
        </div>
      </div>
      <br />

      <div class="card text-center mt-5 bg-body-tertiary p-3">
        <div class="card-body">
          <h5
            class="card-title"
            style={{
              fontWeight: "bold",
              fontSize: "2rem",
              fontFamily: "Georgia, Arial Black",
            }}
          >
            Connect To Us
          </h5>
          <p
            class="card-text"
            style={{ fontSize: "1.3rem", fontWeight: "bolder" }}
          >
            newsfeed@gmail.com
          </p>
        </div>
        <div
          class="card-footer text-body-secondary m-2 bg-dark"
          style={{ borderRadius: "1.5rem" }}
        >
          <p
            class="mt-3"
            style={{
              fontWeight: "bold",
              fontSize: "1.3rem",
              color: "whitesmoke",
            }}
          >
            Copyrights News Feed 2023
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
