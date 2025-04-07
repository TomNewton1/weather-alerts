import {
  AlertSeverity,
  AlertUrgency,
  AlertCertainty,
} from "../../types/constants";
import {
  AlertCertaintyType,
  AlertSeverityType,
  AlertUrgencyType,
} from "../../types/types";

export const sortBySeverity = (
  alertSeverityA: AlertSeverityType["value"],
  alertSeverityB: AlertSeverityType["value"]
) => {
  const severityOrder = [
    AlertSeverity.Extreme.value,
    AlertSeverity.Severe.value,
    AlertSeverity.Moderate.value,
    AlertSeverity.Minor.value,
    AlertSeverity.Unknown.value,
  ];
  return (
    severityOrder.indexOf(alertSeverityA) -
    severityOrder.indexOf(alertSeverityB)
  );
};

export const sortByUrgency = (
  alertUrgencyA: AlertUrgencyType["value"],
  alertUrgencyB: AlertUrgencyType["value"]
) => {
  const urgencyOrder = [
    AlertUrgency.Immediate.value,
    AlertUrgency.Expected.value,
    AlertUrgency.Future.value,
    AlertUrgency.Past.value,
    AlertUrgency.Unknown.value,
  ];
  return (
    urgencyOrder.indexOf(alertUrgencyA) - urgencyOrder.indexOf(alertUrgencyB)
  );
};

export const sortByCertainty = (
  alertCertaintyA: AlertCertaintyType["value"],
  alertCertaintyB: AlertCertaintyType["value"]
) => {
  const certaintyOrder = [
    AlertCertainty.Observed.value,
    AlertCertainty.Likely.value,
    AlertCertainty.Possible.value,
    AlertCertainty.Unknown.value,
  ];
  return (
    certaintyOrder.indexOf(alertCertaintyA) -
    certaintyOrder.indexOf(alertCertaintyB)
  );
};
