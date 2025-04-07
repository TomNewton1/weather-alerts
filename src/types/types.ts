import { AlertCertainty, AlertSeverity, AlertUrgency } from "./constants";

export type AlertUrgencyType = (typeof AlertUrgency)[keyof typeof AlertUrgency];

export type AlertSeverityType =
  (typeof AlertSeverity)[keyof typeof AlertSeverity];

export type AlertCertaintyType =
  (typeof AlertCertainty)[keyof typeof AlertCertainty];
