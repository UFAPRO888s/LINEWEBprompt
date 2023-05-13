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

const TeamX = [];

const KickUall = async (req, res) => {
  if (req.method === "POST") {
    let dataAllKick = req.body;
    if (jsonData.accessToken) {
      bot.login(jsonData.accessToken);
      bot.once("ready", async () => {
        let group = bot.groups.cache.find((g) => g.id.match(dataAllKick.gid));
        await group.members.fetch();

        const resCheck = group.members.cache.filter(
          (member) => !TeamX.includes(member.user.id)
        );
        let members = resCheck.map((member) => {
          // return member.kick();
        });

        //group.reject()
        res?.status(200).json(resCheck);
      });
    }
  } else {
    // Handle any other HTTP method
  }
};

export default KickUall;
