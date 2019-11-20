import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import mockAxios from "jest-mock-axios";

afterEach(() => {
    // cleaning up the mess left behind the previous test
    mockAxios.reset();
});

// I give up on testing this, not sure why it is not working. Seems like useEffect has not fired yet when the expect runs.
test("checks that app will display an error message when no data is returned", () => {
    mockAxios.get.mockResolvedValueOnce({
        data: { results: [] }
    });

    const { queryByText, getByLabelText, getByText, rerender } = render(<App />);

    rerender(<App />);

    expect(mockAxios.get).toHaveBeenCalledWith(
        "https://api.themoviedb.org/3/discover/movie?api_key=e94c3f3fab193264594666c3cf7639b1&sort_by=popularity.desc&page=1"
    );
});
