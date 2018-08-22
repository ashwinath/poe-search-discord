import * as React from "react";
import {
  SearchResultListProps,
  MiscInformationProps,
  SearchResultItemProps,
} from "../Interfaces";
import { mapSourceToName } from "../Utils/Mappers";
import { connect } from "react-redux";
import { Button, Row, Col, CardImg } from "reactstrap";
import { selectItem } from "../Actions";
import "./SearchResultList.css";

function SearchResultList(props: SearchResultListProps) {
  return (
    <div className="result-list">
      {props.searchResultsList.map((item) => {
        return (
          <VisibleSearchResultItem
            key={"" + item.id + "result"}
            data={{...item}}/>
        )
      })}
    </div>
  )
}


class SearchResultItem extends React.Component<SearchResultItemProps, {}> {
  private LEAGUE = "Incursion";

  public render() {
    const {
      name,
      imageUrl,
      chaosValue,
      exaltedValue,
      source,
      baseType,
      corrupted,
      id,
    } = this.props.data;
    const size = "4vw";
    const base = baseType ? baseType : mapSourceToName(source);

    let styles = {
      maxHeight: size,
      maxWidth: size,
      height: size,
      width: "auto",
    };

    if (source === "UniqueAccessory") {
      styles = {
        maxHeight: size,
        maxWidth: size,
        height: "auto",
        width: "100%",
      };
    }

    const chaosTradeValue = (1/chaosValue).toFixed(2);
    const nameEscaped = name.replace(/\ /g, "_");
    const wikiLink = `https://pathofexile.gamepedia.com/${nameEscaped}`;
    const poeTradeUrl = `http://poe.trade/search?league=${this.LEAGUE}&name=${name}`;

    return (
      <Row
        onClick={this.onRowClick.bind(this, id)}
        id={id}
        className="d-flex align-items-center item-container item-hover">
        <Col className="center" ms="2">
          <CardImg
            style={styles}
            top={true}
            src={imageUrl}/>
        </Col>
        <Col className="center" ms="3">
          <h6>{name}</h6>
          <h6>{base}</h6>
          {corrupted ?
            <h6 style={{color: "#d20000"}}>Corrupted</h6>
            : null
          }
        </Col>
        <MiscInformation {...this.props.data} />
        <Col className="center" ms="2">
          {chaosValue < 1 ? <h6>1 Chaos => {chaosTradeValue}</h6> : <h6>{chaosValue} Chaos</h6>}
          {exaltedValue ? <h6>{exaltedValue} Exalteds</h6> : null}
        </Col>
        <Col className="center" ms="2">
          <Button
            style={{ marginLeft: "5px", marginRight: "5px"}}
            href={wikiLink}
            color="info"
            target="_blank">Wiki</Button>
          <Button
            style={{ marginLeft: "5px", marginRight: "5px"}}
            href={poeTradeUrl}
            color="info"
            target="_blank">Poe.Trade</Button>
        </Col>
      </Row>
    );
  }

  private onRowClick(id) {
    const { dispatch } = this.props;
    dispatch(selectItem(id));
  }
}

const VisibleSearchResultItem = connect()(SearchResultItem);

function MiscInformation(props: MiscInformationProps) {
  const { source } = props;
  if (source === "SkillGem"
    && props.links !== null
    && props.links !== undefined) {
    const { gemLevel, gemQuality } = props;
    if (gemLevel !== undefined
      && gemLevel !== null
      && gemQuality !== undefined
      && gemQuality !== null) {
      return (
        <Col className="center" ms="3">
          <h6>Level: {gemLevel}</h6>
          <h6>Quality: {gemQuality}</h6>
        </Col>
      );
    }
  } else if (source === "UniqueArmour" || source === "UniqueWeapon") {
    const linkedText = props.links === 0 ? "0-4 linked" : `${props.links}-linked`;
    return (
      <Col className="center" ms="3">
        <h6>{linkedText}</h6>
      </Col>
    );
  } else if (source === "DivinationCard") {
    const stackSize = props.stackSize;
    return (
      <Col className="center" ms="3">
        <h6>Stack Size: {stackSize}</h6>
      </Col>
    );
  }
  return (
    <Col className="center" ms="3"/>
  );
}

function mapStateToProps(state) {
  const poeItems = state.search.poeItems || [];
  const searchResultsList = poeItems.map((item) => {
    return {
      id: item.id,
      name: item.name,
      imageUrl: item.imageUrl,
      chaosValue: item.chaosValue,
      exaltedValue: item.exaltedValue,
      source: item.source,
      links: item.links,
      baseType: item.baseType,
      corrupted: item.corrupted,
      gemLevel: item.gemLevel,
      gemQuality: item.gemQuality,
      stackSize: item.stackSize
    }
  });
  return {
    searchResultsList,
  };
}

export default connect(mapStateToProps)(SearchResultList);
