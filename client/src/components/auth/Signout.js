import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

const Signout = ({ signout }) => {
  useEffect(() => {
    signout();
  }, [signout]);

  return <div> 로그아웃 처리 되었습니다. </div>;
};

export default connect(null, actions)(Signout);
