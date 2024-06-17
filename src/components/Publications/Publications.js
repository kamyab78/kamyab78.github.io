import React, { useState, useEffect } from "react";
import { Container, Row,Col  } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/kamyab_portfolio.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const publicationsLink =
  "https://www.sid.ir/fileserver/sf/file2024-f032.pdf";

function PublicationsNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="publications-section">
        <Particle />
        <Row style={{ justifyContent: "center", padding: "10px" }}>
        <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Paper title: <strong className="purple">ارائه یک رویکرد مقیاس پذیری خودکار منابع در محیط های بدون سرویس دهنده</strong>
            </h1>
            <h3 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Authors: <strong className="purple"> کاشانیان مبینا | آشتیانی مهرداد | قاسمی امیرحسین</strong>
            </h3>
            <h4 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            References: <strong className="purple"> مبینا کاشانیان، مهرداد آشتیانی، و امیرحسین قاسمی، “ارائه یک رویکرد مقیاس پذیری خودکار منابع در محیط های بدون سرویس دهنده،” presented at the کنفرانس بین المللی وب پژوهی. 1403، [Online]. Available: https://sid.ir/paper/1147632/fa</strong>
            </h4>
            </Col>
        </Row>

        <Row className="publications">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Publication
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default PublicationsNew;
