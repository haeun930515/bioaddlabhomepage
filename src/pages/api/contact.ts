import type { NextApiRequest, NextApiResponse } from 'next';
import multiparty from 'multiparty';
import nodemailer from 'nodemailer';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false, // multiparty 직접 파싱
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const form = new multiparty.Form();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('폼 파싱 실패:', err);
      return res.status(500).json({ error: '폼 파싱 실패' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'bioaddlab.ai@gmail.com',
        pass: '앱비밀번호', // 앱 비번
      },
    });

    const mailOptions: any = {
      from: 'bioaddlab.ai@gmail.com',
      to: 'haeun930515@bioaddlab.com',
      subject: `[문의] ${fields.name?.[0] || ''}`,
      text: `
성함: ${fields.name?.[0] || ''}
이메일: ${fields.email?.[0] || ''}
회사명: ${fields.company?.[0] || ''}
직함: ${fields.position?.[0] || ''}
전화번호: ${fields.phone?.[0] || ''}

문의 내용:
${fields.message?.[0] || ''}
      `,
    };

    // 첨부파일 있으면 추가
    const uploaded = files.file?.[0];
    if (uploaded) {
      const buffer = fs.readFileSync(uploaded.path);
      mailOptions.attachments = [
        {
          filename: uploaded.originalFilename || '첨부파일',
          content: buffer,
        },
      ];
    }

    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error('메일 전송 실패:', error);
      return res.status(500).json({ success: false });
    }
  });
}
