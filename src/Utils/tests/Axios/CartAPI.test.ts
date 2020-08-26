import { cartAPI } from '../../index';
import { URL } from '../../../Constants';

describe('Cart API', function () {
  describe('Passing no parameter in cartAPI()', function () {
    const cartApi = cartAPI();

    it('should have authorization headers', function () {
      const headers = cartApi.defaults.headers;

      expect(Object.keys(headers).includes('authorization')).toBeTruthy();
    });
  });

  describe('Passing {withAuthorization: false} as parameter in cartAPI()', function () {
    const cartApi = cartAPI({ withAuthorization: false });

    it('should not have authorization headers', function () {
      const headers = cartApi.defaults.headers;

      expect(Object.keys(headers).includes('authorization')).toBeFalsy();
    });
  });

  describe('Checking Base Url', function () {
    const cartApi = cartAPI();

    it(`should have base Url of ${URL.CART_API_URL}`, function () {
      const baseUrl = cartApi.defaults.baseURL;

      expect(baseUrl).toBe(URL.CART_API_URL);
    });
  });
});
