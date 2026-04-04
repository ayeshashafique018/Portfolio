import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Container, Button, Row, Col, Card } from "react-bootstrap";

const blogPosts = [
  {
    id: 1,
    category: "SMM",
    title: "How Social Media Builds Brands",
    excerpt: "Explore how digital presence helps you grow in today's competitive world.",
    image: "https://via.placeholder.com/300x180",
  },
  {
    id: 2,
    category: "Web Dev",
    title: "React vs. Vanilla JS",
    excerpt: "Understand the key differences between building apps with React and plain JavaScript.",
    image: "https://via.placeholder.com/300x180",
  },
  {
    id: 3,
    category: "Public Speaking",
    title: "Overcome Stage Fear",
    excerpt: "Here are proven techniques to build confidence in public speaking.",
    image: "https://via.placeholder.com/300x180",
  },
  {
    id: 4,
    category: "Speak Peak",
    title: "The Power of Speech",
    excerpt: "A look into how structured speech can change perceptions.",
    image: "https://via.placeholder.com/300x180",
  },
];

const categories = ["All", "Web Dev", "SMM", "Public Speaking", "Speak Peak"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div style={{ backgroundColor: "#000", minHeight: "100vh" }}>
      <Navbar />

      <Container className="py-5 text-white">
        <h2 className="fw-bold text-center mb-3">Explore Our Insights</h2>
        <p className="text-center text-light mb-4">
          Explore topics that reflect my journey and expertise.
        </p>

        {/* Filter Buttons */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "info" : "outline-info"}
              className="rounded-pill px-3"
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Blog Cards */}
        <Row className="g-4">
          {filteredPosts.map((post) => (
            <Col md={6} lg={4} key={post.id}>
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={post.image} />
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.excerpt}</Card.Text>
                  <Button variant="primary" size="sm">
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
