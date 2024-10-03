import { chainAuthorized } from "@shared/route";
import { currentRoute } from "./model";
import { PostPage } from "./ui";

export const PostRoute = {
  view: PostPage,
  route: chainAuthorized(currentRoute),
};
