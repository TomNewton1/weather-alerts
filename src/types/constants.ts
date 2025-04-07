export const AlertUrgency = {
  Immediate: {
    value: "Immediate",
    description: "Responsive action SHOULD be taken immediately",
  },
  Expected: {
    value: "Expected",
    description: "Responsive action SHOULD be taken soon (within next hour)",
  },
  Future: {
    value: "Future",
    description: "Responsive action SHOULD be taken in the near future",
  },
  Past: {
    value: "Past",
    description: "Responsive action is no longer required",
  },
  Unknown: { value: "Unknown", description: "Urgency not known" },
} as const;

export const AlertSeverity = {
  Extreme: {
    value: "Extreme",
    description: "Extreme threat to life or property",
  },
  Severe: {
    value: "Severe",
    description: "Significant threat to life or property",
  },
  Moderate: {
    value: "Moderate",
    description: "Possible threat to life or property",
  },
  Minor: { value: "Minor", description: "Minimal threat to life or property" },
  Unknown: { value: "Unknown", description: "Severity not known" },
} as const;

export const AlertCertainty = {
  Observed: {
    value: "Observed",
    description: "Observed: Determined to have occurred or ongoing",
  },
  Likely: {
    value: "Likely",
    description: "Likely: Likely to occur (probability > ~50%)",
  },
  Possible: {
    value: "Possible",
    description: "Possible: May occur (probability <= ~50%)",
  },
  Unknown: { value: "Unknown", description: "Certainty not known" },
} as const;
