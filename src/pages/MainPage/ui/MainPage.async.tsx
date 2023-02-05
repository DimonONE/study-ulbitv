import { lazy } from "react";

export const MainPgeAsync = lazy(
  () =>
    new Promise((resolve) =>
      // @ts-ignore
      setTimeout(() => resolve(import("./MainPge")), 1500)
    )
);
