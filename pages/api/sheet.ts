// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {google} from "googleapis"

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
      const { Name, Feedback } = req.body;
      console.log('sheet body data', Name, Feedback);
  
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.CLIENT_EMAIL,
          client_id: process.env.CLIENT_ID,
          private_key: process.env.PRIVATE_KEY,

        },
        scopes: [
          'https://www.googleapis.com/auth/drive',
          'https://www.googleapis.com/auth/drive.file',
          'https://www.googleapis.com/auth/spreadsheets',
        ],
      });
  
      const sheets = google.sheets({
        auth,
        version: 'v4',
      });
  
      const response = await sheets.spreadsheets.values.append({
          
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: 'Sheet1!A2:C',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [[Name, Feedback]],
        },
      });
      
      return res.status(201).json({ message: 'It works!', response });
    }
    return res.status(200).json({ message: 'Hey!' });
  }
  
  export default handler;


 
