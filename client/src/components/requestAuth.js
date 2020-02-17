import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";
export default ChildComponent => {
  const ComposedComponent = ({ auth, history, ...props }) => {
    const shouldNavigateAway = useCallback(() => {
      if (!auth) {
        history.push("/");
      }
    }, [auth, history]);
    useEffect(() => {
      shouldNavigateAway();
      return () => {};
    }, [shouldNavigateAway]);

    return <ChildComponent {...props} />;
  };
  const mapStateToProps = ({ auth }) => ({
    auth: auth.authenticated
  });

  return connect(mapStateToProps)(ComposedComponent);
};
