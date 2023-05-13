// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { Client } = require("node-linejs");
const bot = new Client();
let jsonData = require("./json/token.json");

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
};

const KickrejectKick = async (req, res) => {
  if (req.method === "POST") {
    let datarejectKick = req.body;
    console.log(datarejectKick);
    if (jsonData.accessToken) {
      bot.login(jsonData.accessToken);
      bot.once("ready", async () => {
        try {
          let group = bot.groups.cache.find((g) =>
            g.id.match(datarejectKick.gid)
          );
          await group.members.fetch();
          const resCheck = group.members.cache.filter((member) =>
            datarejectKick.ck.includes(member.user.id)
          );
          let members = resCheck.map((member) => {
            return member.reject();
          });
          console.log(members);
          res?.status(200).json(datarejectKick);
        } catch (e) {
          console.log(e);
        }
      });
    }
  } else {
    // Handle any other HTTP method
  }
};

export default KickrejectKick;
