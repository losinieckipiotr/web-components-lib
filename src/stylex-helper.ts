import stylex from "@stylexjs/stylex";
import { StyleXArray, CompiledStyles, InlineStyles } from "@stylexjs/stylex/lib/StyleXTypes";

export  function getClass (
  ...styles: ReadonlyArray<
    StyleXArray<
      | (null | undefined | CompiledStyles)
      | boolean
      | Readonly<[CompiledStyles, InlineStyles]>
    >
  >
) {
  return stylex.attrs(...styles).class ?? ''
}
