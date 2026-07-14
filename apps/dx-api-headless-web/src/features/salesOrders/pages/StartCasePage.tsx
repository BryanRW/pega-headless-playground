import { Button, Card, CardContent, MenuItem, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../app/queryKeys";
import { casesApi } from "../../../api/cases";

interface StartCaseForm {
  customerName: string;
  email: string;
  vehicleModel: string;
}

export function StartCase() {
  const { register, handleSubmit, reset } = useForm<StartCaseForm>();
  const queryClient = useQueryClient();
  const createCase = useMutation({
    mutationFn: (values: StartCaseForm) =>
      casesApi.createCase({
        vehicleModel: values.vehicleModel,
        customer: { id: "draft-customer", name: values.customerName, email: values.email, phone: "", region: "Unassigned", preferredModel: values.vehicleModel, lifetimeValue: 0 },
      }),
    onSuccess: () => {
      reset();
      void queryClient.invalidateQueries({ queryKey: queryKeys.cases() });
      void queryClient.invalidateQueries({ queryKey: queryKeys.dashboard });
    },
  });

  return (
    <Stack spacing={2}>
      <div>
        <Typography variant="h4">Start Case</Typography>
        <Typography color="text.secondary">Create a Pega case through the service layer.</Typography>
      </div>
      <Card>
        <CardContent>
          <Stack component="form" spacing={2} onSubmit={handleSubmit((values) => createCase.mutate(values))} sx={{ maxWidth: 560 }}>
            <TextField label="Customer name" required {...register("customerName", { required: true })} />
            <TextField label="Email" type="email" required {...register("email", { required: true })} />
            <TextField select label="Vehicle model" defaultValue="Model Y Long Range" {...register("vehicleModel")}>
              <MenuItem value="Model Y Long Range">Model Y Long Range</MenuItem>
              <MenuItem value="Model 3 Performance">Model 3 Performance</MenuItem>
              <MenuItem value="Model S Plaid">Model S Plaid</MenuItem>
              <MenuItem value="Cybertruck AWD">Cybertruck AWD</MenuItem>
            </TextField>
            <Button type="submit" variant="contained" disabled={createCase.isPending}>{createCase.isPending ? "Creating..." : "Create Case"}</Button>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
}
