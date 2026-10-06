import { algorithmPage } from "./data.js";
import { createGenericAlgorithmPage } from "../../_shared/page-factory.js";

export const stylePath = "./src/algorithms/searching/binary-search/styles.css";
export function createAlgorithmPage(deps) {
  return createGenericAlgorithmPage(deps, algorithmPage);
}
