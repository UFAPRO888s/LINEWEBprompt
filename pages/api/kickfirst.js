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

const KickFirstKickOnce = async (req, res) => {
  if (req.method === "POST") {
    let dataFirstKick = req.body;
    console.log(dataFirstKick);
    if (jsonData.accessToken) {
      bot.login(jsonData.accessToken);
      bot.once("ready", async () => {
        try {
          let group = bot.groups.cache.find((g) =>
            g.id.match(dataFirstKick.gid)
          );
          await group.members.fetch();
          const resCheck = group.members.cache.filter((member) =>
            dataFirstKick.ck.includes(member.user.id)
          );
          let members = resCheck.map((member) => {
            // return member.kick();
          });
          res?.status(200).json(dataFirstKick);
        } catch (e) {
          console.log(e);
        }
      });
    }
  } else {
    // Handle any other HTTP method
  }
};

export default KickFirstKickOnce;
