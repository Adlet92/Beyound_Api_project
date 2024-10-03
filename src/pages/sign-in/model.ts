import { redirect } from "atomic-router";
import { createEffect, sample } from "effector";
import { signIn } from "../../shared/api/auth/index";
import { $token, tokenRecived } from "../../shared/auth/index";
import { routes } from "../../shared/config/routes";
import { showErrorNotificationFx } from "../../shared/notification";

export const currentRoute = routes.auth.signIn;

export const signInFx = createEffect(signIn);

sample({
  clock: signInFx.doneData,
  source: $token,
  fn(_, clk) {
    return clk.accessToken;
  },
  target: tokenRecived,
});

redirect({
  clock: signInFx.doneData,
  route: routes.private.posts,
});

sample({
  clock: signInFx.failData,
  target: showErrorNotificationFx,
});
