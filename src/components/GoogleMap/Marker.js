import React from 'react';
import styled from 'styled-components';

function Marker(props) {
  const Wrapper = styled.div`
    width: 27px;
    height: 43px;
    overflow: hidden;
    position: absolute;
    left: -12px;
    top: -43px;
  `

  const Label = styled.span`
    position: absolute;
    top: 6px;
    left: 9px;
    font-size: 15px;
    z-index: 1;
  `
  const Img = styled.img`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 27px;
    height: 43px;
    user-select: none;
    border: 0px;
    padding: 0px;
    margin: 0px;
    max-width: none;
  `
  return(
    <Wrapper>
      <Label>{props.text}</Label>
      <Img src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi-dotless2.png" />
    </Wrapper>
  )

}

export default Marker
