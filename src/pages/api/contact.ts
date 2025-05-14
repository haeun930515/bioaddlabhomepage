// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs';
import nodemailer from 'nodemailer';

export const config = {
  api: {
    bodyParser: false, // FormData 직접 처리
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const form = formidable({ multiples: false });

  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: '폼 파싱 실패' });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'bioaddlab.ai@gmail.com',
        pass: 'piwrqquqbbbjqzzg', // 앱 비밀번호
      },
    });

    const mailOptions: any = {
      from: 'bioaddlab.ai@gmail.com',
      to: 'haeun930515@bioaddlab.com',
      subject: `[문의] ${fields.name}`,
      text: `
성함: ${fields.name}
이메일: ${fields.email}
회사명: ${fields.company}
직함: ${fields.position}
전화번호: ${fields.phone}

문의 내용:
${fields.message}
      `,
    };

    if (files.file) {
      const file = Array.isArray(files.file) ? files.file[0] : files.file;
      const buffer = fs.readFileSync(file.filepath);

      mailOptions.attachments = [
        {
          filename: file.originalFilename || '첨부파일',
          content: buffer,
        },
      ];
    }

    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error('메일 전송 실패:', error);
      return res.status(500).json({ success: false, error });
    }
  });
}
