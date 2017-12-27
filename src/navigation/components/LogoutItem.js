import React from 'react';
import { connect } from 'react-redux';

import CustomItem from './CustomItem';
import { logoutUser } from '../../actions/AuthAction';

const logoutItem = props => {
  return (
    <CustomItem title="Sair" iconName="log-out" onPress={props.logoutUser} />
  );
}

mapStateToProps = state => ({
  loginError: state.AuthReducer.loginError
});
export default connect(mapStateToProps, { logoutUser })(logoutItem);



