import {Card, CardBody} from "reactstrap";

function ImageCaption(props) {
    return (
        <div>
            <Card className="border-0">
                <CardBody>
                    <img src={props.source} width={props.width} height={'auto'}/>
                    <h5 style={{marginTop: '2rem'}}>
                        {props.caption}
                    </h5>
                </CardBody>
            </Card>
        </div>
    )
}

export default ImageCaption