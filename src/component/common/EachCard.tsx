import React from "react";
import Card from "react-bootstrap/Card";
import { defaultDataAtom, searchedDataAtom } from "../../states";
import { useRecoilValue } from "recoil";
import { IItems } from "../../types";
// 인덱스는 보낼 수 없다. 해당 인덱스의 정보들을 그 이전에 돌리면서 넣는다
function EachCard(data: any) {
  const searchData = useRecoilValue(searchedDataAtom);
  const defaultData = useRecoilValue(defaultDataAtom);

  console.log("혹쉬 서치데이터가 들어왔는가", searchData);
  console.log("혹쉬 디폴트 데이트가 들어왔는가", defaultData);
  //isSearched이면 서치데이터 뿌리고 아니면 디폴트 데이터
  // 이 카드를 부르는 컴포넌트에서 처리하자!! 프롭스로 넘겨!!
  // if (isSearched) {
  //   const image = searchData[0].links[0].href;
  //   const title = searchData[0].data[0].title;
  //   const date_create = searchData[0].data[0].data_create;
  //   const description = searchData[0].data[0].description;
  //   const keyword = searchData[0].data[0].keyword[0];
  // } else {
  //   const image = searchData[0].links[0].href;
  //   const title = searchData[0].data[0].title;
  //   const date_create = searchData[0].data[0].data_create;
  //   const description = searchData[0].data[0].description;
  //   const keyword = searchData[0].data[0].keyword[0];
  // }
  return (
    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  );
}

export default EachCard;
