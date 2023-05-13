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

const UserKick = async (req, res) => {
  if (req.method === "POST") {
    let dataUserKick = req.body;
    if (jsonData.accessToken) {
      bot.login(jsonData.accessToken);
      bot.once("ready", async () => {
        let group = bot.groups.cache.find((g) => g.id.match(dataUserKick.gid));
        await group.members.fetch();
        const resCheck = group.members.cache.filter((member) =>
          dataUserKick.uid.includes(member.user.id)
        );
        let members = resCheck.map((member) => {
          return member.kick();
        });
        console.log(members);
        res?.status(200).json(dataUserKick);
      });
    }
  } else {
    // Handle any other HTTP method
  }
};

export default UserKick;
