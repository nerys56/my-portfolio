import React from "react";
import { Container } from "react-bootstrap";
import Menu from "./NavBar";
import "./InnerHeader.css";

interface HeaderTitle {
  title: string;
  subtitle: string;
}

const InnerHeader: React.FC<HeaderTitle> = ({ title, subtitle }) => {
  return (
    <>
      <Container fluid className="full-width-container background-color">
        <Menu csmLink={true} />
        <div className="artcile-bg">
          <div className="artcile-bg">
            <div className="article-title">
              <h1 className="title">{title}</h1>
              <p className="sub-heading">{subtitle}</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default InnerHeader;
