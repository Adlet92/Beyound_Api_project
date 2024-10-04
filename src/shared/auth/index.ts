import { redirect } from "atomic-router";
import { createEvent, createStore } from "effector";
import { persist } from "effector-storage/local";
import { routes } from "../config/routes";

export const $token = createStore("");
export const tokenReceived = createEvent<string>();
export const tokenExprired = createEvent();

$token.on(tokenReceived, (_, token) => token).reset(tokenExprired);

export const $isAuth = $token.map((state) => !!state);

persist({
  store: $token,
  key: "token",
  // serialize(value) {
  //   return value;
  // },
  // deserialize(value) {
  //   return value;
  // },
  serialize: (value) => value,
  deserialize: (value) => value,
});

redirect({
  clock: tokenExprired,
  route: routes.auth.signIn,
});
