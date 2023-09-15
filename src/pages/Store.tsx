import { Col, Row } from "react-bootstrap";
import storeITems from "../data/items.json";

export function Store() {
    return ( 
        <>   
       <h1>Store</h1>
       <Row  md={2} xs={1} lg={3} className="g-3">
        {storeITems.map(item =>(
            <Col>{JSON.stringify(item)}</Col>
        ))}
       </Row>
       </>
 
     )
}
 
