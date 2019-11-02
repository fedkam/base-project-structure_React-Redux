import React from "react";
import { ComponentServiceConsumer } from "../component-service-context";

const withComponentService = () => Wrapped => {
  return props => {
    return (
      <ComponentServiceConsumer>
        {dataService => {
          return <Wrapped {...props} dataService={dataService} />;
        }}
      </ComponentServiceConsumer>
    );
  };
};

export default withComponentService;
