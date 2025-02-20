import { Dailydatum as TDailydatum } from "../api/dailydatum/Dailydatum";

export const DAILYDATUM_TITLE_FIELD = "note";

export const DailydatumTitle = (record: TDailydatum): string => {
  return record.note?.toString() || String(record.id);
};
