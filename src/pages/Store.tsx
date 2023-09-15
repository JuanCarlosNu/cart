import { Col, Row } from "react-bootstrap";
import storeITems from "../data/items.json";

export function Store() {
    return ( 
        <>   
       <h1>Store</h1>
       <Row>
        {storeITems.map(item =>(
            <Col>{JSON.stringify(item)}</Col>
        ))}
       </Row>
       </>
 
     )
}
 
