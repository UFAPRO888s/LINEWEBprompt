// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { Client } = require("node-linejs");
const bot = new Client();
let jsonData = require("./json/token.json");

export default (req, res) => {
  const { idx } = req.params;
  console.log(idx)
  if (jsonData.accessToken) {
    bot.login(jsonData.accessToken);
    bot.on("ready", async () => {
      let group = bot.groups.cache.find((g) => g.id.match(idx));
      let member = await group.members.fetch();

      let memberData = await member.map((member) => {
        return {
          userid: member.user.id,
          typeUser: member.user.type,
          relation: member.user.relation,
          displayDataUser: member.user.displayName,
          createdTime: member.user.createdTime,
          pictureStatus: member.user.pictureStatus,
          statusMessage: member.user.statusMessage,
          picturePath: member.user.picturePath,
        };
      });

      res?.status(200).json({
        botX: "member in group as " + group.name,
        membersIDX: memberData,
      });
    });
  }
};
