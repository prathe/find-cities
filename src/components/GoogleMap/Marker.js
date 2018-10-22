import React from 'react';
import styled from 'styled-components';

function Marker(props) {

  // z-index: For overlapping markers: a lower props.index may mean a more relevant location
  const Wrapper = styled.div`
    position: absolute;
    width: 27px;
    height: 43px;
    top: -43px;
    left: -12px;
    overflow: hidden;
    z-index: ${() => 20 - props.index};
  `
  const Label = styled.div`
    position: absolute;
    width: 27px;
    height: 43px;
    text-align: center;
    top: 6px;
    left: 0px;
    font-size: 15px;
    z-index: 1;
  `
  const Img = styled.img`
    position: absolute;
    width: 27px;
    height: 43px;
    top: 0px;
    left: 0px;
    user-select: none;
    border: 0px;
    padding: 0px;
    margin: 0px;
    max-width: none;
  `
  const labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const label = labels[props.index % labels.length]

  return(
    <Wrapper>
      <Label>{label}</Label>
      <Img src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi-dotless2.png" />
    </Wrapper>
  )
}

export default Marker
