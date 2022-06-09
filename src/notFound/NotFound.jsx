import React, { Component } from "react";
import {Alert} from "reactstrap";
export default class NotFound extends Component {
  render() {
    return (
      <div style={{margin:'auto'}}>
         <Alert key="warning" variant="warning">
      Böyle bir sayfa bulunamadı... Lütfen geri dön.
    </Alert>
      </div>
    );
  }
}
