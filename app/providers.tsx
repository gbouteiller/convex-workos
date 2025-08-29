"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";
import { Providers as Pv } from "./(auth)/providers";

export function Providers({ children, ...props }: ComponentProps<typeof NextThemesProvider>) {
	return (
		<NextThemesProvider {...props} attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
			<Pv>{children}</Pv>
		</NextThemesProvider>
	);
}
