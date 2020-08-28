import { ApiCallFunc } from '../types/API';
import { AddToCartValues, Cart, RemoveFromCartValues } from '../types/Cart';
import { cartAPI } from '../Utils';
import { ApiValidation, NotFound, TokenExpired } from '../Errors';

export default class UserService {
  public static getCart: ApiCallFunc<string, Cart> = async (email: string) => {
    try {
      const response = await cartAPI({
        withAuthorization: true,
      }).get('/cart/' + email);

      // Request Successful
      if (response.status === 200) {
        return response.data;
      }
    } catch (e) {
      if (e.status === 400)
        throw new ApiValidation(e.response.data.error, e.response.data.message);

      if (e.response.status === 404) throw new NotFound('Cart not found!');

      throw new TokenExpired('Token Expired!');
    }
  };

  public static addToCart: ApiCallFunc<AddToCartValues, Cart> = async (
    values,
  ) => {
    try {
      const response = await cartAPI({
        withAuthorization: true,
      }).post('/cart/add', values);

      // Request Successful
      if (response.status === 201) {
        return response.data;
      }
    } catch (e) {
      if (e.status === 400)
        throw new ApiValidation(e.response.data.error, e.response.data.message);

      if (e.response.status === 404) throw new NotFound('Cart not found!');

      throw new TokenExpired('Token Expired!');
    }
  };
  public static removeFromCart: ApiCallFunc<
    RemoveFromCartValues,
    Cart
  > = async (values) => {
    try {
      const response = await cartAPI({
        withAuthorization: true,
      }).post('/cart/remove', values);

      // Request Successful
      if (response.status === 201) {
        return response.data;
      }
    } catch (e) {
      if (e.status === 400)
        throw new ApiValidation(e.response.data.error, e.response.data.message);

      if (e.response.status === 404) throw new NotFound('Cart not found!');

      throw new TokenExpired('Token Expired!');
    }
  };
}
