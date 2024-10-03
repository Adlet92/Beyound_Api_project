import { createRoutesView } from "atomic-router-react";
import { PostRoute } from "./post";
import { PostsRoute } from "./posts";
import { SignInRoute } from "./sign-in";
import { SignUpRoute } from "./sign-up";

export const Pages = createRoutesView({
  routes: [SignInRoute, SignUpRoute, PostsRoute, PostRoute],
});
