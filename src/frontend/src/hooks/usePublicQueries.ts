import { useQuery } from "@tanstack/react-query";
// Public queries using the public (anonymous) actor - no auth required.
import type { Inquiry } from "../backend.d.ts";
import { usePublicActor } from "./usePublicActor";

export function useGetAllInquiries() {
  const { actor, isFetching } = usePublicActor();
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
  const { actor, isFetching } = usePublicActor();
  return useQuery<bigint>({
    queryKey: ["inquiryCount"],
    queryFn: async () => {
      if (!actor) return BigInt(0);
      return actor.getInquiryCount();
    },
    enabled: !!actor && !isFetching,
  });
}
