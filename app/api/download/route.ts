import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET(req: NextRequest) {
  try {
    const filePath = path.join(process.cwd(), 'public', 'heng_keanghor.pdf');
    const fileBuffer = await fs.readFile(filePath);

    const response = new NextResponse(fileBuffer, {
      headers: {
        'Content-Disposition': 'attachment; filename=Heng Keanghor.pdf',
        'Content-Type': 'application/pdf',
      },
    });

    return response;
  } catch (error) {
    return new NextResponse('File not found', { status: 404 });
  }
}
