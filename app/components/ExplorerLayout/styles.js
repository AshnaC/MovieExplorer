import styled from "styled-components";
import FontAwesome from "react-fontawesome";

export const Header = styled.div`
  width: 100%;
  line-height: 60px;
  background: #1f6bc0;
`;

export const SubItem = styled.div`
  width: 300px;
  display: inline-block;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
`;

export const StyledFont = styled(FontAwesome)`
  display: inline-block;
  font-weight: bold;
  color: #fff;
  padding-right: 10px;
`;

export const Loader = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
`;

export const Error = styled.div`
  color: darkgrey;
  font-size: 20px;
  font-weight: bold;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
