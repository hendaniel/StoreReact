import { connect } from "react-redux";
import { getProducts } from "../actions/api/Products";
import ProductsList from "../components/ProductsList";

const mapStateToProps = (state) => ({
  products: state.products,
  hasError: state.loadingError,
  isLoading: state.loadingInProgress,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(getProducts()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
