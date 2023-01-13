import { render } from "@testing-library/react";
import store from '../src/app/store';
import { Provider } from "react-redux";

const customRender = ui => {
  render(
    <Provider store={store}>
      {ui}
    </Provider>
  )
}

export { customRender as render };
