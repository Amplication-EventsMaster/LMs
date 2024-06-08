import { ContactInformation as TContactInformation } from "../api/contactInformation/ContactInformation";

export const CONTACTINFORMATION_TITLE_FIELD = "dd";

export const ContactInformationTitle = (
  record: TContactInformation
): string => {
  return record.dd?.toString() || String(record.id);
};
