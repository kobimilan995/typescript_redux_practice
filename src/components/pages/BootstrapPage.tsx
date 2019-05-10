import React from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import { connect } from "react-redux";

import { ApplicationState } from "../../redux/reducers";
import { setAuthenticationToken } from "../../redux/actions/authentication/actions";
import { AuthenticationActionTypes } from "../../redux/actions/authentication/types";

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: "center"
  }
});

interface BootstrapPageProps {
  token: string;
  setAuthenticationToken: (value: string) => AuthenticationActionTypes;
}

class BootstrapPage extends React.Component<BootstrapPageProps> {
  static navigationOptions: any = {
    header: null
  };

  componentDidMount(): void {
    console.log(this.props);
  }

  render() {
    const { token, setAuthenticationToken } = this.props;
    return (
      <View style={styles.containerStyle}>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            margin: 30
          }}
          onChangeText={(value: string) => setAuthenticationToken(value)}
          value={token}
        />
        <Text>{token}</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ authentication }: ApplicationState) => {
  const { token } = authentication;
  return {
    token
  };
};

export default connect(
  mapStateToProps,
  {
    setAuthenticationToken
  }
)(BootstrapPage);
