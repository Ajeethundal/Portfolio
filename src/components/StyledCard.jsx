import React from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";
import GH from "../images/GH.svg";

const StyledCardComponent = styled.div`
  .card {
    color: ${({ theme }) => theme.color};
    background: ${({ theme }) => (theme.name === "light" ? "" : "#797B7B")};
    box-shadow: ${({ theme }) =>
      theme.name === "light"
        ? "0 3px 10px rgb(0 0 0 / 0.2)"
        : "0 3px 10px rgb(255 255 255 / 0.2)"};

    .card-link {
      text-decoration: none;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.color};

      &:hover {
        color: var(--primary);
      }
    }

    .card-footer {
      border-top: var(--border);
      background: ${({ theme }) => (theme.name === "light" ? "" : "#404040")};
    }

    .card-body {
      overflow: hidden;
    }

    .card-text {
      overflow: hidden; // or 'visible' if you want the content to extend outside the box without scrolling
    }
  }
`;

export default function StyledCard({ image, name, description, url, demo }) {
  return (
    <StyledCardComponent>
      <Card>
        <Card.Img
          variant="top"
          src={image ? image : GH}
          alt={name}
          className="mx-auto"
        />
        <Card.Body className="text-center">
          <Card.Title>{name}</Card.Title>
          <Card.Text className="card-text">{description}</Card.Text>
        </Card.Body>
      </Card>
    </StyledCardComponent>
  );
}
