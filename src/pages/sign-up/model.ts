import { redirect } from "atomic-router";
import { createEffect, sample } from "effector";
import { signUp } from "../../shared/api/auth/index";
import { $token, tokenRecived } from "../../shared/auth/index";
import { routes } from "../../shared/config/routes";
import { showErrorNotificationFx } from "../../shared/notification";

export const currentRoute = routes.auth.signUp;

export const signUpFx = createEffect(signUp);

sample({
  clock: signUpFx.doneData,
  source: $token,
  fn(_, clk) {
    return clk.accessToken;
  },
  target: tokenRecived,
});

redirect({
  clock: signUpFx.doneData,
  route: routes.private.posts,
});

sample({
  clock: signUpFx.failData,
  target: showErrorNotificationFx,
});
