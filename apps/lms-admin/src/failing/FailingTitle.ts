import { Failing as TFailing } from "../api/failing/Failing";

export const FAILING_TITLE_FIELD = "newField";

export const FailingTitle = (record: TFailing): string => {
  return record.newField?.toString() || String(record.id);
};
