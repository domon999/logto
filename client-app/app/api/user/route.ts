import { getLogtoContext } from '@logto/next';
import { logtoConfig } from '@/lib/logto';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const { claims, isAuthenticated } = await getLogtoContext(logtoConfig, request);

  if (!isAuthenticated) {
    return Response.json({ error: 'Not authenticated' }, { status: 401 });
  }

  return Response.json({
    id: claims?.sub,
    email: claims?.email,
    name: claims?.name,
    picture: claims?.picture,
  });
}
