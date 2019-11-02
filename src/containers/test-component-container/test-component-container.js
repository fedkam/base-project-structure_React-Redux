import React, { Component } from "react";
import { connect } from "react-redux";
import { withComponentService } from "../../components/hoc";
import { fetchData } from "../../actions";
import { compose } from "../../utils";
import Spinner from "../../components/spinner";
import ErrorIndicator from "../../components/error-indicator";
import TestComponent from "../../components/test-component";

class TestComponentContainer extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { datas, loading, error } = this.props;
    console.log("---render()", this.props);

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <TestComponent data={datas} />;
  }
}

const mapStateToProps = ({
  dataForTestComonent: { datas, loading, error }
}) => {
  return { datas, loading, error };
};

const mapDispatchToProps = (dispatch, { dataService }) => {
  console.log("---mapDispatchToProps()  dataService = ", dataService);
  return {
    fetchData: fetchData(dataService, dispatch)
  };
};

export default compose(
  withComponentService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(TestComponentContainer);
