import { userAPI } from '../../index';
import { URL } from '../../../Constants';

describe('USER API', function () {
  describe('Passing no parameter in userAPI()', function () {
    const userApi = userAPI();

    it('should have authorization headers', function () {
      const headers = userApi.defaults.headers;

      expect(Object.keys(headers).includes('authorization')).toBeTruthy();
    });
  });

  describe('Passing {withAuthorization: false} as parameter in userAPI()', function () {
    const userApi = userAPI({ withAuthorization: false });

    it('should not have authorization headers', function () {
      const headers = userApi.defaults.headers;

      expect(Object.keys(headers).includes('authorization')).toBeFalsy();
    });
  });

  describe('Checking Base Url', function () {
    const userApi = userAPI();

    it(`should have base Url of ${URL.USER_API_URL}`, function () {
      const baseUrl = userApi.defaults.baseURL;

      expect(baseUrl).toBe(URL.USER_API_URL);
    });
  });
});
