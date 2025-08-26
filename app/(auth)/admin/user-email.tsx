"use client";

import { preloadedQueryResult } from "convex/nextjs";
import { type Preloaded, useConvexAuth, usePreloadedQuery } from "convex/react";
import { useEffect } from "react";
import type { api } from "@/convex/_generated/api";

// ROOT ************************************************************************************************************************************
export function UserEmail({ preloaded }: UserEmailProps) {
	const { isLoading, isAuthenticated } = useConvexAuth();
	const email = usePreloadedQuery(preloaded);

	useEffect(() => {
		console.log({ isAuthenticated, isLoading, email, preloaded: preloadedQueryResult(preloaded) });
	}, [isAuthenticated, isLoading, email, preloaded]);

	return <div>Email : {isLoading ? preloadedQueryResult(preloaded) : email}</div>;
}
type UserEmailProps = { preloaded: Preloaded<typeof api.auth.getUserEmail> };
