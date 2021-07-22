import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import { ArrayItems } from "../../types";

interface EachCardProps {
  itemData: ArrayItems;
}

function EachCard({ itemData }: EachCardProps) {
  console.log(itemData);
  const imageUrl = itemData.links && itemData.links[0].href;
  const title = itemData && itemData.data[0].title;
  const description = itemData && itemData.data[0].description;
  const date_created = itemData && itemData.data[0].date_created;
  const center = itemData && itemData.data[0].center;
  const shortDescription = description.slice(0, 120).concat("...");
  return (
    <Styled.Root>
      <Card style={{ width: "300px", height: "550px" }}>
        <Card.Img variant="top" src={imageUrl} style={{ height: "180px" }} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{shortDescription}</Card.Text>
          <Card.Text>center : "{center}"</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{date_created}</small>
        </Card.Footer>
      </Card>
    </Styled.Root>
  );
}

export default EachCard;

const Styled = {
  Root: styled.div``,
};
