// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { signIn, signOut, useSession, getSession } from "next-auth/react"
import { prisma } from "../../util/db"

export default async function writeTomato(req, res) {
  const session = await getSession({ req })
    if (session && req.method === 'POST') {
      try {
        const bodydata = JSON.parse(req.body);

        const result = await prisma.tomatoSessions.create({
          data: {
            project: bodydata['notes'],
            notes: bodydata.['endNotes'],
            grade: bodydata.['grade'],
            user: {
              connect: { 
                email: session.user.email,
              },
            },
          },
        })
        res.status(200).json(result);
      } catch (err) {
        console.log(err);
        res.status(403).json({ err: "Error occured while adding a new tomatosession." });
      }
    }
}
