import { connect } from "react-redux";
import { getProducts } from "../actions/api/Products";
import UserPanel from "../components/UserPanel";

const mapStateToProps = (state) => ({
  products: state.products,
  hasError: state.loadingError,
  isLoading: state.loadingInProgress,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: (value) => dispatch(getProducts()),
});
export default connect(mapStateToProps, mapDispatchToProps)(UserPanel);
