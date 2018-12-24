import React, { Component } from "react";

class ProfileItem extends Component {
  render() {
    return <div />;
  }
}

export default connect(
  null,
  { getProfiles }
)(Profiles);
