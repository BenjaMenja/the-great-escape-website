import DesignReturn from "../../components/design/DesignReturn";
import {Col, Row} from "reactstrap";
import ImageCaption from "../../components/design/ImageCaption";
import cabinet from "../../images/procedural_cabinet.png"
import shelf from "../../images/procedural_shelf.png"
import house from "../../images/house.png"
import livingroom from "../../images/living_room.png"
import bedroom from "../../images/bedroom.png"

function Environment() {
    return(
        <div>
            <h1>
                Environment: Hanwen Xu
            </h1>
            <DesignReturn />
            <div style={{margin: "auto", maxWidth: '80%'}}>
                <Row>
                    <Col md={'6'}>
                        <ImageCaption source={cabinet} caption="Procedurally generated cabinets" width={'90%'}/>
                    </Col>
                    <Col md={'6'}>
                        <ImageCaption source={shelf} caption={"Procedurally generated shelves"} width={'90%'}/>
                    </Col>
                </Row>
                <Row>
                    <Col md={'6'}>
                        <ImageCaption source={house} caption={"House Overview"} width={'79%'} />
                    </Col>
                    <Col md={'6'}>
                        <ImageCaption source={livingroom} caption={"Living Room"} width={'100%'} />
                    </Col>
                </Row>
                <Row>
                    <Col md={'6'}>
                        <ImageCaption source={bedroom} caption={'Bedroom'} width={'90%'} />
                    </Col>
                </Row>
            </div>

            <DesignReturn />
        </div>
    )
}

export default Environment