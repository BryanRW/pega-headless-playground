import axios from "axios";
import type { PegaError } from "../types";

export const mapPegaError = (error: unknown): PegaError => {
  if (axios.isAxiosError(error)) {
    const responseData = error.response?.data as
      | { message?: string; error?: string; code?: string; correlationId?: string }
      | undefined;

    return {
      message:
        responseData?.message ??
        responseData?.error ??
        error.message ??
        "Pega request failed.",
      status: error.response?.status,
      code: responseData?.code,
      correlationId: responseData?.correlationId ?? error.response?.headers["x-correlation-id"],
      details: responseData,
    };
  }

  if (error instanceof Error) {
    return { message: error.message };
  }

  return { message: "An unexpected integration error occurred.", details: error };
};
