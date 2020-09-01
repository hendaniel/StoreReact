import { connect } from "react-redux";
import { getUser } from "../actions/api/User";
import UserPanel from "../components/UserPanel";

const mapStateToProps = (state) => ({
  user: state.user,
  hasError: state.loadingError,
  isLoading: state.loadingInProgress,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(getUser()),
});
export default connect(mapStateToProps, mapDispatchToProps)(UserPanel);
