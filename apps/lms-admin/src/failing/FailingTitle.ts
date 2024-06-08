import { Failing as TFailing } from "../api/failing/Failing";

export const FAILING_TITLE_FIELD = "address1";

export const FailingTitle = (record: TFailing): string => {
  return record.address1?.toString() || String(record.id);
};
