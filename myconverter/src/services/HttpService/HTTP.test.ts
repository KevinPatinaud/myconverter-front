import axios, { AxiosResponse } from "axios";
import HttpService from "./Http.service";

jest.mock("axios");

describe("HTTPservice", () => {
  describe("When get function is called", () => {
    it("should call axios", async () => {
      axios.get = jest.fn().mockReturnValue({
        data: { AxiosResponse: "AxiosResponse" },
      } as AxiosResponse<any, any>);

      const response = await HttpService.get("www.URL_TEST.com");

      expect(axios.get).toHaveBeenCalledWith("www.URL_TEST.com");
      expect(response).toEqual({ data: { AxiosResponse: "AxiosResponse" } });
    });
  });
});
