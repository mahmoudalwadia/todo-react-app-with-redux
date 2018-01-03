import React from "react";
import { connect } from "react-redux";
const Message = ({ message }) =>
  message ? <span className="message">{message}</span> : null;
const mapStateToProps = state => ({
  message: state.message
});

export default connect(mapStateToProps)(Message);
