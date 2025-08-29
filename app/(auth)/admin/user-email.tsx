"use client";

import { preloadedQueryResult } from "convex/nextjs";
import { type Preloaded, useConvexAuth, usePreloadedQuery } from "convex/react";
import { useEffect } from "react";
import type { api } from "@/convex/_generated/api";

// ROOT ************************************************************************************************************************************
export function UserEmail({ preloaded }: UserEmailProps) {
	const { isLoading } = useConvexAuth();
	const email = usePreloadedQuery(preloaded);

	useEffect(() => {
		console.log({ isLoading, email, preloaded: preloadedQueryResult(preloaded) });
	}, [isLoading, email, preloaded]);

	return <div>Email : {email}</div>;
}
type UserEmailProps = { preloaded: Preloaded<typeof api.auth.getUserEmail> };
