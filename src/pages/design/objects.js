import DesignReturn from "../../components/design/DesignReturn";
import {Col, Row} from "reactstrap";
import ImageCaption from "../../components/design/ImageCaption";
import fridge from "../../images/fridge.png"
import microwave from "../../images/microwave.png"

function Objects() {
    return (
        <div>
            <h1>
                Objects: Hanwen Xu
            </h1>
            <DesignReturn />
            <div style={{margin: "auto", width: '80%'}}>
                <Row>
                    <Col md={'6'}>
                        <ImageCaption source={fridge} caption="Fridge" width={'80%'}/>
                    </Col>
                    <Col md={'6'}>
                        <ImageCaption source={microwave} caption="Microwave" width={'97%'} />
                    </Col>
                </Row>
            </div>
            <DesignReturn />
        </div>
    )
}
export default Objects