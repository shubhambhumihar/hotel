import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./About.css";
import g from "../../img/g.png";
import ab from "../../img/ab.png";
import a0 from "../../img/a0.png";
import a1 from "../../img/a1.png";
import a3 from "../../img/a3.png";
import a4 from "../../img/a4.png";
import a5 from "../../img/img2.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <Container fluid>
        <Row>
          <img src={g} alt="" />
        </Row>
      </Container>

      <div className="aboutImg">
        <img src={ab} alt="" />
      </div>
      <div className="infoCon">
        <div className="aboutInfo">
          <h1>"Hello there we meet!</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
            magnam magni accusamus enim! Optio quia iste ad maxime debitis
            sapiente culpa corporis! Iusto hic libero similique provident,
            perferendis explicabo, minima, deserunt officia in soluta nesciunt
            qui amet quisquam laudantium illo quis beatae dolorum deleniti minus
            rerum magni. Tempore velit culpa modi maiores vitae, libero
            molestiae mollitia cumque beatae, et pariatur aliquam. Numquam
            deserunt commodi qui earum velit modi quae cupiditate, dolorem sunt
            temporibus porro quo, quod delectus veritatis quas? Dolor ex minima
            dolores porro, facere iure, ratione maxime neque accusantium, minus
            libero ad quam? Excepturi et hic accusantium est iure odit eaque
            culpa architecto aspernatur delectus. Eveniet temporibus a debitis
            mollitia sequi ratione nostrum, similique voluptas magnam alias
            doloremque at quod ipsam! Alias repudiandae itaque distinctio
            laboriosam, earum sint! Quo molestiae magni rerum suscipit.
            Accusantium nihil iusto cumque repellendus, vel ducimus error dolore
            blanditiis iste sunt corporis atque dolores ex sequi aperiam
            possimus aut et dicta omnis nostrum numquam fugit eligendi! Quisquam
            fugiat adipisci modi unde exercitationem quam expedita autem eos
            ipsam, dolorem fuga voluptate atque laudantium voluptates alias
            voluptatem! Similique, ad. Illo, architecto aliquid illum similique
            dignissimos fugit veniam temporibus quo quas. Soluta iure,
            exercitationem vitae modi possimus, voluptas natus illo eveniet
            expedita ad numquam nesciunt dolore maiores veniam, ipsum quisquam
            suscipit. Repellendus rem sunt ut doloremque ullam quasi!
            Consequuntur accusamus ratione nam. Debitis facere molestiae
            quibusdam ipsa itaque eum, a tenetur ducimus alias totam voluptatem
            necessitatibus dolor odio officiis repellendus. Iure voluptatibus
            nam repellendus consectetur reprehenderit ea earum accusamus
            nesciunt. Necessitatibus dolorem voluptatibus modi tempore illum,
            rerum iure laborum? Praesentium soluta, eaque excepturi maiores quia
            suscipit, asperiores nihil, mollitia exercitationem perspiciatis
            voluptatum alias dolores aliquid! Consequuntur esse suscipit ipsam
            earum deleniti at nihil, eveniet quibusdam. Veniam temporibus
            adipisci vitae ipsa, amet voluptas consectetur facere officiis,
            suscipit id esse.
          </p>
        </div>
      </div>

      <div className="aboutPic">
        <div className="aboutRow">
          <div className="">
            <img src={a0} alt="" />
          </div>
          <div>
            <img src={a1} alt="" />
          </div>
          <div>
            <img src={a3} alt="" />
          </div>
          <div>
            <img src={a4} alt="" />
          </div>
          <div>
            <img src={a5} alt="" />
          </div>
        </div>
      </div>
      <div className="discovery">
        <Link style={{ textDecoration: "none" }} to="../gallery">
          <p className="dis">Discover Our Gallery</p>
        </Link>
      </div>
    </div>
  );
}

export default About;
