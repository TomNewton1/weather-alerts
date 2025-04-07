import { useMemo } from "react";
import { GenericDataTable } from "../GenericDataTable";
import { useActiveWeatherAlertsQuery } from "../../hooks/useActiveWeatherAlertsQuery";
import { GridColDef, GridInitialState } from "@mui/x-data-grid";
import { ErrorMessage } from "../ErrorMessage";
import {
  renderSeverityCell,
  renderUrgencyCell,
} from "./alertsTableCellRenderers";
import {
  sortByCertainty,
  sortBySeverity,
  sortByUrgency,
} from "./alertsTableSortingUtils";

export const ALERTS_COLUMNS: GridColDef[] = [
  { field: "headline", headerName: "Headline", flex: 1 },
  {
    field: "severity",
    headerName: "Severity",
    renderCell: renderSeverityCell,
    sortComparator: sortBySeverity,
    flex: 1,
  },
  {
    field: "urgency",
    headerName: "Urgency",
    renderCell: renderUrgencyCell,
    sortComparator: sortByUrgency,
    flex: 1,
  },
  {
    field: "certainty",
    headerName: "Certainty",
    sortComparator: sortByCertainty,
    flex: 1,
  },
  { field: "areaDesc", headerName: "Affected Areas", flex: 1 },
  { field: "effective", headerName: "Effective Time", flex: 1 },
  { field: "sent", headerName: "Issued", flex: 1 },
  { field: "expires", headerName: "Expires Time", flex: 1 },
  { field: "event", headerName: "Event", flex: 1 },
  { field: "instruction", headerName: "Instructions", flex: 1 },
];

export const INITIAL_TABLE_STATE: GridInitialState = {
  pagination: {
    paginationModel: {
      pageSize: 100,
    },
  },
  columns: {
    columnVisibilityModel: {
      instruction: false,
    },
  },
  sorting: {
    sortModel: [
      {
        field: "sent",
        sort: "desc",
      },
    ],
  },
};
export const AlertsTable = () => {
  const { data, isLoading, error } = useActiveWeatherAlertsQuery();

  const rows = useMemo(() => {
    return data?.features.map((feature) => ({
      id: feature.properties.id,
      headline: feature.properties.headline,
      event: feature.properties.event,
      areaDesc: feature.properties.areaDesc,
      severity: feature.properties.severity,
      urgency: feature.properties.urgency,
      certainty: feature.properties.certainty,
      sent: feature.properties.sent,
      effective: feature.properties.effective,
      expires: feature.properties.expires,
      instruction: feature.properties.instruction,
    }));
  }, [data]);

  if (error)
    return (
      <ErrorMessage errorMessage="Failed to load weather alerts. Please try again later." />
    );

  return (
    <GenericDataTable
      rows={rows ?? []}
      columns={ALERTS_COLUMNS}
      getRowHeight={() => "auto"}
      loading={isLoading}
      initialState={INITIAL_TABLE_STATE}
    />
  );
};
