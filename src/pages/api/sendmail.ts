import { NextApiRequest, NextApiResponse } from 'next'
import SendMail from 'src/lib/sendmail'


export default async function handler(request: NextApiRequest, response: NextApiResponse) {
    const { from, email, message } = request.body
    const mail = new SendMail(from, email, message)
    console.log(mail)
    const result = await mail.send()
}