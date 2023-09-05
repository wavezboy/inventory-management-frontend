import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import { GetServerSideProps } from "next";

import {
  Alert,
  Container,
  Col,
  Row,
  Stack,
  Modal,
  Card,
  Nav,
} from "react-bootstrap";
import { fetchStores } from "../../network/myApi";

import { useEffect } from "react";

export default function BrealingNewsPage() {
  const getStores = async () => {
    try {
      const stores = await fetchStores();
      console.log(stores);
    } catch (error) {
      console.log(error);
    }
  };

  getStores();
  return (
    <>
      <Head>
        <title>Breaking News</title>
      </Head>

      <main className="max-h-screen">
        <Card className=" mx-auto min-h-screen ">
          <Card.Header>
            <Nav className="mt-2" variant="tabs" defaultActiveKey="/">
              <Nav.Item>
                <Nav.Link className="" href="/">
                  Active
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#disabled" disabled>
                  Disabled
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            {/* conatin the body */}
            okay
          </Card.Body>
        </Card>
      </main>
    </>
  );
}
