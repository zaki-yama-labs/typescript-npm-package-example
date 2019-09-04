import * as pluralize from "pluralize";

export function getPlural(str: string): string {
  return pluralize.plural(str);
}
