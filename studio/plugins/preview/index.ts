import type { DefaultDocumentNodeResolver } from "sanity/desk";
import PagePreview from "./page-preview";

export const previewDocumentNode = (): DefaultDocumentNodeResolver => {
  return (S, { schemaType }) => {
    switch (schemaType) {
      case "page":
        return S.document().views([
          S.view.form(),
          S.view.component(PagePreview).title("Preview Post"),
        ]);

      default:
        return S.document().views([S.view.form()]);
    }
  };
};
