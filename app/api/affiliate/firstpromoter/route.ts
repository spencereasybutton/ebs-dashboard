import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { getCompanyPromoterByEmail } from "../../../../lib/firstpromoter-client";
import { emptyFirstPromoterAffiliateDto } from "../../../../lib/firstpromoter-dto";

export const dynamic = "force-dynamic";

/**
 * GET /api/affiliate/firstpromoter
 * Resolves the signed-in user from Clerk (server), then loads FirstPromoter by email.
 * Never accepts email from the client query/body.
 */
export async function GET() {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await currentUser();
  /** Clerk session email (sign-in / primary); never from client query or body. */
  const email =
    user?.primaryEmailAddress?.emailAddress ??
    user?.emailAddresses?.[0]?.emailAddress;

  if (!email) {
    return NextResponse.json(emptyFirstPromoterAffiliateDto(), {
      status: 200,
      headers: { "Cache-Control": "no-store" },
    });
  }

  const dto = await getCompanyPromoterByEmail(email);

  return NextResponse.json(dto, {
    status: 200,
    headers: { "Cache-Control": "no-store" },
  });
}
