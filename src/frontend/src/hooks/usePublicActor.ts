import { useQuery } from "@tanstack/react-query";
// Public actor hook - creates an anonymous actor without authorization initialization.
// Used for public-facing operations (inquiry submission, reading public data)
// that don't require admin authentication.
import type { backendInterface } from "../backend";
import { createActorWithConfig } from "../config";

export function usePublicActor() {
  const actorQuery = useQuery<backendInterface>({
    queryKey: ["publicActor"],
    queryFn: () => createActorWithConfig(),
    staleTime: Number.POSITIVE_INFINITY,
  });

  return {
    actor: actorQuery.data ?? null,
    isFetching: actorQuery.isFetching,
  };
}
