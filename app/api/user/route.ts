import { logtoClient } from '@/lib/logto';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const context = await logtoClient.getLogtoContext(request);
    
    if (!context.isAuthenticated) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    return NextResponse.json({ 
      user: context.claims,
      userInfo: context.userInfo 
    });
  } catch (error) {
    console.error('[v0] Error fetching user:', error);
    return NextResponse.json({ error: 'Failed to fetch user' }, { status: 500 });
  }
}
