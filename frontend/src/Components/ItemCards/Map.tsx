import * as React from "react";
import { connect } from "react-redux";
import { SearchResultDetailsProps } from "../../Interfaces";
import { mapStateToProps } from "./ReduxMapper";
import { CardImg } from "reactstrap";
import ImplicitKeyValue from "./ImplicitKeyValue";
import "./Cards.css";

const BASE_MAP_LEVEL = 67;

function Map(props: SearchResultDetailsProps) {
  const { item } = props;
  const size = "4vw";
  return (
    <div className="center map-item-details">
      <div className="map-title-header">
        <p className="map-header-text default-margin-bottom">{item.name}</p>
      </div>
      <div className="implicit-border">
        <ImplicitKeyValue
          implicitKey={"Map Level"}
          implicitValue={BASE_MAP_LEVEL + item.mapTier} />
        <ImplicitKeyValue
          implicitKey={"Map Tier"}
          implicitValue={item.mapTier} />
      </div>
      <hr className="map-line-break-item hr-margin"/>
      <CardImg
        style={{
          maxHeight: size,
          maxWidth: size,
          height: size,
          width: "auto",
        }}
        top={true}
        src={item.imageUrl}/>
    </div>
  )
}

export default connect(mapStateToProps)(Map);
