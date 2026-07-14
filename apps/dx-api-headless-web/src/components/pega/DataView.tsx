import { Card, CardContent, Typography } from "@mui/material";

interface DataViewProps<T> {
  title: string;
  data: T;
}

export function DataView<T>({ title, data }: DataViewProps<T>) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <pre style={{ margin: 0, overflow: "auto", whiteSpace: "pre-wrap" }}>
          {JSON.stringify(data, null, 2)}
        </pre>
      </CardContent>
    </Card>
  );
}
