import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthUser, ICartElement, IOrder, IProduct, IProductFull } from "../utils/types";
import { getData } from "../utils/requests";

interface IInitialState {
  auth: null | AuthUser;
  products: [] | Array<IProduct>;
  product: IProductFull | null;
  cart: [] | Array<ICartElement>;
  orders: Array<IOrder>;
  cartCounter: number;
  currentCategory: number;
}

export const fetchProducts = createAsyncThunk("products/fetchProducts", async (_, { dispatch }) => {
  const products = await getData("products");
  dispatch(setProducts(products));
  return products;
});

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (productId: number, { dispatch }) => {
    const product: IProductFull = await getData(`products/${productId}`);
    dispatch(setProduct(product));
    return product;
  }
);

const initialState: IInitialState = {
  auth: null,
  products: [],
  product: null,
  cart: [],
  orders: [],
  cartCounter: 0,
  currentCategory: 0,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<AuthUser | null>) {
      state.auth = action.payload;
    },
    setProducts(state, action: PayloadAction<Array<IProduct>>) {
      state.products = action.payload;
    },
    setCurrentCategory(state, action: PayloadAction<number>) {
      state.currentCategory = action.payload;
    },
    setProduct(state, action: PayloadAction<IProductFull>) {
      state.product = action.payload;
    },
    setCart(state, action: PayloadAction<Array<ICartElement> | []>) {
      state.cart = action.payload;
    },
    setCartCounter(state, action: PayloadAction<number>) {
      state.cartCounter = action.payload;
    },
    removeFromLocalCart(state, action: PayloadAction<number>) {
      state.cart = state.cart.filter((el) => el.product.id !== action.payload);
    },
    setOrder(state, action: PayloadAction<IOrder>) {
      state.orders.push(action.payload);
    },
    setAllOrder(state, action: PayloadAction<Array<IOrder>>) {
      state.orders = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.product = action.payload;
      });
  },
});

export const {
  setAuth,
  setProducts,
  setCart,
  setCartCounter,
  removeFromLocalCart,
  setOrder,
  setAllOrder,
  setProduct,
  setCurrentCategory,
} = productsSlice.actions;

export default productsSlice.reducer;
