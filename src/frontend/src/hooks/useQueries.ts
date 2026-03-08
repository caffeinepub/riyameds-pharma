import { useQuery } from "@tanstack/react-query";
import type { Inquiry } from "../backend.d.ts";
import { useActor } from "./useActor";

export function useGetAllInquiries() {
  const { actor, isFetching } = useActor();
  return useQuery<Inquiry[]>({
    queryKey: ["inquiries"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllInquiries();
    },
    enabled: !!actor && !isFetching,
    refetchInterval: 30_000,
  });
}

export function useGetInquiryCount() {
  const { actor, isFetching } = useActor();
  return useQuery<bigint>({
    queryKey: ["inquiryCount"],
    queryFn: async () => {
      if (!actor) return BigInt(0);
      return actor.getInquiryCount();
    },
    enabled: !!actor && !isFetching,
  });
}
