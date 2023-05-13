// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { Client } = require("node-linejs");
const bot = new Client();
let jsonData = require("./json/token.json");

export default (req, res) => {
  bot.on("ready", async () => {
   // console.log(`logged as ${bot.user.displayName} ${bot.user.id}`);
    let groups = await bot.groups.fetch();
    let group = await groups.map((group) => {
      return {
        id: group.id,
        type: group.type,
        picturePath: group.picturePath,
        name: group.name,
        createdTime: group.createdTime,
        groupExtracreator: group.extra.groupExtra.creator,
        memberMids: Object.keys(group.extra.groupExtra.memberMids).length,
        inviteeMids: Object.keys(group.extra.groupExtra.inviteeMids).length,
        inviteeID: group.extra.groupExtra.inviteeMids
      };
    });
    res
      .status(200)
      .json({
        name: bot.user.displayName,
        botID: bot.user.id,
        groupData: group,
        numGroup: group.length,
      });
  });
  bot.login(jsonData.accessToken);
};
