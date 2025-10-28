import { updateSession } from "@/lib/supabase/middleware";
import type { NextRequest } from "next/server";

/**
 * Nouvelle API Proxy pour Next.js 15+
 * Cette fonction agit comme le middleware global précédent.
 */
export async function proxy(request: NextRequest) {
  return await updateSession(request);
}

// Configuration du proxy (même logique que ton ancien matcher)
export const config = {
  matcher: [
    /**
     * Exclure :
     * - fichiers statiques (_next/static)
     * - optimisation d'images (_next/image)
     * - favicon
     * - images (.svg, .png, .jpg, etc.)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
