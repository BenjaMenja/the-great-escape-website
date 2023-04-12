import DesignReturn from "../../components/design/DesignReturn";
import {Col, Row} from "reactstrap";
import ImageCaption from "../../components/design/ImageCaption";
import cabinets from "../../images/cabinets.gif"
import shelf from "../../images/procedural_shelf.png"
import livingroomkitchen from "../../images/living_room_kitchen.png"
import bedroom from "../../images/bedroom.png"
import modelassets from "../../images/model-assets.png"


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
                        <ImageCaption source={cabinets} caption="Procedurally generated cabinets" width={'90%'}/>
                    </Col>
                    <Col md={'6'}>
                        <ImageCaption source={shelf} caption={"Procedurally generated shelves"} width={'90%'}/>
                    </Col>
                </Row>
                <Row>
                    <Col md={'6'}>
                        <ImageCaption source={bedroom} caption={'Bedroom'} width={'90%'} />
                    </Col>
                    <Col md={'6'}>
                        <ImageCaption source={livingroomkitchen} caption={"Living Room"} width={'100%'} />
                    </Col>
                </Row>
                <Row>
                    <Col md={'6'}>
                        <ImageCaption source={modelassets} caption={"All Modelled Assets"} width={"100%"} />
                    </Col>
                </Row>
            </div>

            <DesignReturn />
        </div>
    )
}

export default Environment