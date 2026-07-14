import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { CaseCard } from "../../../components/pega/CaseCard";
import { EmptyState } from "../../../components/common/EmptyState";
import { ErrorPanel } from "../../../components/common/ErrorPanel";
import { Loading } from "../../../components/common/Loading";
import { SearchBox } from "../../../components/common/SearchBox";
import { useCases } from "../hooks/useCases";

export function SalesOrders() {
  const [query, setQuery] = useState("");
  const cases = useCases(query);

  return (
    <Stack spacing={2}>
      <div>
        <Typography variant="h4">Sales Orders</Typography>
        <Typography color="text.secondary">Search and inspect Pega case lifecycle records.</Typography>
      </div>
      <SearchBox value={query} onChange={setQuery} label="Search sales orders" />
      {cases.isLoading ? <Loading label="Loading sales orders" /> : null}
      {cases.isError ? <ErrorPanel error={cases.error} /> : null}
      {!cases.isLoading && cases.data?.length === 0 ? <EmptyState title="No orders found" description="Try another customer, case ID, or vehicle model." /> : null}
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 2 }}>
        {cases.data?.map((salesCase) => <CaseCard key={salesCase.id} salesCase={salesCase} />)}
      </Box>
    </Stack>
  );
}
