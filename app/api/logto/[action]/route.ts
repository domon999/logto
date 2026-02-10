import { logtoClient } from '@/lib/logto';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest, context: { params: Promise<{ action: string }> }) {
  const { action } = await context.params;
  
  if (action === 'sign-in') {
    return logtoClient.handleSignIn()(request);
  }
  
  if (action === 'sign-out') {
    return logtoClient.handleSignOut()(request);
  }
  
  if (action === 'callback') {
    return logtoClient.handleSignInCallback()(request);
  }
  
  return new Response('Not found', { status: 404 });
}
