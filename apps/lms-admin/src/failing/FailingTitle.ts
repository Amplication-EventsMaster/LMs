import { Failing as TFailing } from "../api/failing/Failing";

export const FAILING_TITLE_FIELD = "zip";

export const FailingTitle = (record: TFailing): string => {
  return record.zip?.toString() || String(record.id);
};
