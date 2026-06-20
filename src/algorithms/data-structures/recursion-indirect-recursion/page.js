// AUTO-GENERATED ALGORITHM PAGE
import { createGenericAlgorithmPage } from "../../_shared/page-factory.js";
import { algorithmPage } from "./data.js";

export const stylePath = `./src/algorithms/${algorithmPage.categorySlug}/${algorithmPage.algorithmSlug}/styles.css`;

export function createAlgorithmPage(deps) {
  return createGenericAlgorithmPage(deps, algorithmPage);
}
